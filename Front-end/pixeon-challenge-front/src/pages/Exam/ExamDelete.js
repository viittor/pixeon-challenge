import React from "react";
import Header from "../../components/Header/Header";

const ExamDelete = () => {
    return(
        <>
        <div className="main-container">
        <Header/> 
        <div className="individual-page">
        <h1 className="h1-page">Deletar Exame</h1>
        <div className="form-container">
        <form className="form-health">
            <label className="form-label">Numero do Exame:</label>
                <input className="form-input" required/>
            
            <div className="button-div">
                <button className="btn-input">Deletar</button>
                <button className="btn-input">Cancelar</button>
            </div>
            
        </form>
    </div>
        </div>    
        </div>
        </>
        
        
    )
}

export default ExamDelete;