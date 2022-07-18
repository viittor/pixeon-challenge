import React from "react";

const Healthcare = () => {
    return(
<div className="individual-page">
    <h1 className="h1-page">Cadastrar Clínica</h1>

    <div className="form-container">
        <form className="form-health">
            <label className="form-label">Nome:</label>
                <input className="form-input"/>
            <label className="form-label">CNPJ:</label>
            <input className="form-input"/>
            
            <div className="button-div">
                <button className="btn-input">Cadastrar</button>
                <button className="btn-input">Cancelar</button>
            </div>
            
        </form>
    </div>
</div>
        
    )
}

export default Healthcare;