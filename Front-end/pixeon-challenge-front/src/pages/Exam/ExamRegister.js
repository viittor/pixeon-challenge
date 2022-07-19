import React from "react";
import Header from "../../components/Header/Header";

const ExamRegister = () => {
  return (
    <>
      <div className="main-container">
        <Header />
        <div className="individual-page">
          <h1 className="h1-page">Cadastrar Exame</h1>

          <div className="form-container">
            <form className="form-health">
              <label className="form-label">Clínica:</label>
               <select className="form-input">
                <option>Selecione</option>
               </select>
              <label className="form-label">Paciente:</label>
              <input className="form-input" required/>

              <label className="form-label">Idade:</label>
              <input className="form-input" required/>

              <label className="form-label">Gênero:</label>
              <input className="form-input" required/>

              <label className="form-label">Médico:</label>
              <input className="form-input" required />

              <label className="form-label">CRM:</label>
              <input className="form-input" required/>

              <label className="form-label">Procedimento:</label>
              <input className="form-input" required/>

              <div className="button-div">
                <button className="btn-input">Cadastrar</button>
                <button className="btn-input">Cancelar</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>

  )
}

export default ExamRegister;