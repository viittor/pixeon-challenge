import React from "react";
import ExamItem from "../../components/ExamItem/ExamItem";
import Header from "../../components/Header/Header";

const ExamList = () => {
    
    return(
        <>
        <div className="main-container">
        <Header/> 
        <div className="individual-page">
        <h1 className="h1-page">Listar Exames</h1>
        <ExamItem/>
            </div>    
        </div>       
        </>
        
    )
}

export default ExamList;