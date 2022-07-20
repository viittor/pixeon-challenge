import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";

const ExamFind = () => {
    const [exam, setExam] = useState([]);
    const [examFilter, setExamFilter] = useState("");

    return (
        <>
            <div className="main-container">
                <Header />
                <div className="individual-page">
                    <h1 className="h1-page">Encontrar Exame</h1>
                    <div className="form-container">
                        <form className="form-health">
                            <label className="form-label">Numero do Exame:</label>
                            <input
                                className="form-input"
                                type={"text"}
                                value={examFilter}
                                onChange={(e) => setExamFilter(e.target.value)}
                                required
                            />

                            <div className="button-div">
                                <button className="btn-input" type="submit">Encontrar</button>
                                <button className="btn-input">Cancelar</button>
                            </div>

                                                        
                        </form>
                        {/* <div className="exam-item">
                                
                                <div>
                                    <h4>Exame: {exam.id}</h4>
                                    <p>Clinica: {exam.healthcare.name}</p>
                                    <h4>Paciente: {exam.pacientName}</h4>
                                    <p>Idade: {exam.pacientAge}</p>
                                    <p>Gênero: {exam.pacientGender}</p>
                                    <p>Médico: {exam.physicianName}</p>
                                    <p>CRM: {exam.physicianCrm}</p>
                                    <p>Procedimento: {exam.procedureName}</p>

                                </div>

                            </div> */}

                    </div>
                </div>

            </div>
        </>

    )
}

export default ExamFind;