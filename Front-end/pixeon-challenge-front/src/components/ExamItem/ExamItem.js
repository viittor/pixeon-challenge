import React, { useEffect, useState } from "react";

const ExamItem = () => {
    const [exam, setExam] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/exam")
            .then((response) => response.json())
            .then((data) => setExam(data));
    }, []);

    return (
        <>
            <div className="container-exam-item">
                <ul className="exam-item">

                    {exam.map((item) => (
                        <li className="exam-li" >
                            <div className="exam-head">
                                <h4 id="exam-id">Exame: {item.id}</h4>
                                <h4 className="exam-h4">{item.pacientName}</h4>
                            </div>
                            <div className="exam-body">
                                <p className="exam-p">Idade: {item.pacientAge}</p>
                                <p className="exam-p">Gênero: {item.pacientGender}</p>
                            </div>
                            <p className="exam-p">Clinica: {item.healthcare.name}</p>
                            <div className="exam-body">
                                <p className="exam-p">Médico: {item.physicianName}</p>
                                <p className="exam-p">CRM: {item.physicianCrm}</p>
                            </div>
                            <div className="exam-body">

                            </div>
                            <p className="exam-p">Procedimento: {item.procedureName}</p>

                        </li>
                    ))}

                </ul>

            </div>
        </>


    )
}

export default ExamItem;