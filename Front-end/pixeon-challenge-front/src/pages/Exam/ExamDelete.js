import React, { useState } from "react";
import { useNavigate } from "react-router";
import Header from "../../components/Header/Header";

const ExamDelete = () => {
    const navigate = useNavigate();
    const [examItem, setExamItem] = useState("");

    const handleSubmit = async (event) => {
        console.log(examItem)
        event.preventDefault();
        fetch("http://localhost:8080/exam/" + examItem, {
            method: "DELETE",
        });
        alert("Exame excluido com sucesso!")
    }
    return (
        <>
            <div className="main-container">
                <Header />
                <div className="individual-page">
                    <h1 className="h1-page">Deletar Exame</h1>
                    <div className="form-container">
                        <form className="form-health" onSubmit={handleSubmit}>
                            <label className="form-label">Numero do Exame:</label>
                            <input
                                className="form-input"
                                name="exam"
                                type="text"
                                onChange={(e) => setExamItem(e.target.value)}
                                required />

                            <div className="button-div">
                                <button className="btn-input" type="submit">Deletar</button>
                                <button className="btn-input" onClick={() => navigate("/")}>Cancelar</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ExamDelete;