import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Header from "../../components/Header/Header";

const ExamFind = () => {
    const navigate = useNavigate();
    const [exam, setExam] = useState([]);
    const [examItem, setExamItem] = useState("");

    // falta implementar o filtro completo
    useEffect(() => {
        if (!examItem === "") {
            fetch("http://localhost:8080/exam/" + examItem, {
                method: "GET",
            })
                .then((response) => response.json())
                .then((data) => setExam(data));
        }
    }, []);

    return (
        <>
            <div className="main-container">
                <Header />
                <div className="individual-page">
                    <h1 className="h1-page">Encontrar Exame</h1>
                    <div className="form-container">
                        <form className="form-health" /*onSubmit={handleSubmit}*/>
                            <label className="form-label">Numero do Exame:</label>
                            <input
                                className="form-input"
                                name="exam"
                                type="text"
                                // onChange={(e) => setExamItem(e.target.value)}
                                required />

                            <div className="button-div">
                                <button className="btn-input" type="submit">Encontrar</button>
                                <button className="btn-input" onClick={() => navigate("/")}>Cancelar</button>
                            </div>
                        </form>
                        {exam.map((item) => (
                            <li>
                                <h4>Exame: {item.id}</h4>
                                <p>Clinica: {item.healthcare.name}</p>
                                <h4>Paciente: {item.pacientName}</h4>
                                <p>Idade: {item.pacientAge}</p>
                                <p>Gênero: {item.pacientGender}</p>
                                <p>Médico: {item.physicianName}</p>
                                <p>CRM: {item.physicianCrm}</p>
                                <p>Procedimento: {item.procedureName}</p>

                            </li>
                        ))}
                    </div>

                </div>
            </div>

        </>

    )
}

export default ExamFind;