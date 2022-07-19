import React, { useEffect, useState } from "react";

const ExamItem = () => {
    const [exam, setExam] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/exam", {mode: "no-cors"})
            .then((response) => response.json())
            .then((data) => setExam(data));



        // async function getExams(){
        //     const examResult = await fetch("http://localhost:8080/exam", {
        //         mode: 'no-cors',
        //         method: "GET"
        //     });
        //     const examData = await examResult.json();
        //     setExam(examData);
        // }
        // getExams();
    }, []);

    return(
        <>
        <div className="container-exam-item">
            <ul className="exam-item">
                Teste
                {exam.map((item) =>(
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

            </ul>

        </div>
        </>
        
        
    )
}

export default ExamItem;