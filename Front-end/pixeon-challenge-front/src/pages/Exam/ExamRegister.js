import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "../../components/Header/Header";

const ExamRegister = () => {
  const navigate = useNavigate();
  const [healthcare, setHealthcare] = useState("");
  const [healthcares, setHealthcares] = useState([]);
  const [pacientName, setPacientName] = useState("");
  const [pacientAge, setPacientAge] = useState("");
  const [pacientGender, setPacientGender] = useState("");
  const [physicianName, setPhysicianName] = useState("");
  const [physicianCrm, setPhysicianCrm] = useState("");
  const [procedureName, setProcedureName] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (!healthcare) {
        alert("Por favor escolha a Clínica!");
        return;
      } else if (!pacientName) {
        alert("Por favor preencha o Nome do Paciente");
        return;
      }
      else if (!pacientAge) {
        alert("Por favor preencha a idade do Paciente");
        return;
      }
      else if (!pacientGender) {
        alert("Por favor escolha o gênero do Paciente");
        return;
      }
      else if (!physicianName) {
        alert("Por favor preencha o Nome do Médico");
        return;
      }
      else if (!physicianCrm) {
        alert("Por favor preencha o CRM do Médico");
        return;
      }
      else if (!procedureName) {
        alert("Por favor preencha o Nome do Procedimento");
        return;
      }
      const healthId = JSON.parse('{"id":' + healthcare + '}');
      await fetch("http://localhost:8080/exam", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          healthcare: healthId,
          pacientName: pacientName,
          pacientAge: pacientAge,
          pacientGender: pacientGender,
          physicianName: physicianName,
          physicianCrm: physicianCrm,
          procedureName: procedureName
        }),

      });
      alert("Exame cadastrado com sucesso!");
    } catch (error) {
      alert(
        "Não foi possivel concluir a sua solicitação! Por favor tente novamente."
      );
    }
  };

  useEffect(() => {
    fetch("http://localhost:8080/healthcare")
      .then((response) => response.json())
      .then((data) => setHealthcares(data));
  }, []);

  return (
    <>
      <div className="main-container">
        <Header />
        <div className="individual-page">
          <h1 className="h1-page">Cadastrar Exame</h1>

          <div className="form-container">
            <form className="form-health" onSubmit={handleSubmit}>
              <label className="form-label">Clínica:</label>
              <select
                className="form-input"
                name="healthcares"
                onChange={(e) => setHealthcare(e.target.value)}
                required
              >
                <option value="" >Selecione</option>
                {healthcares.map((healthcare) => (
                  <option key={healthcare.id} value={healthcare.id}>{healthcare.name}</option>
                ))}

              </select>
              <label className="form-label">Paciente:</label>
              <input
                className="form-input"
                type="text"
                name="pacientName"
                onChange={(e) => setPacientName(e.target.value)}
                placeholder="Ex.: João da Silva"
                maxLength="100"
                required
              />

              <label className="form-label">Idade:</label>
              <input
                className="form-input"
                type="text"
                name="pacientAge"
                onChange={(e) => setPacientAge(e.target.value)}
                placeholder="Ex.: 18"
                maxLength="3"
                required
              />

              <label className="form-label">Gênero:</label>
              <select
                className="form-input"
                name="pacientGender"
                onChange={(e) => setPacientGender(e.target.value)}
                required>
                <option value="" >Selecione</option>
                <option value="Masculino" >Masculino</option>
                <option value="Feminino" >Feminino</option>
              </select>

              <label className="form-label">Médico:</label>
              <input
                className="form-input"
                type="text"
                name="physicianName"
                onChange={(e) => setPhysicianName(e.target.value)}
                placeholder="Ex.: Dr. Pedro da Silva"
                maxLength="100"
                required />

              <label className="form-label">CRM:</label>
              <input
                className="form-input"
                type="text"
                maxLength="8"
                name="physicianCrm"
                onChange={(e) => setPhysicianCrm(e.target.value)}
                placeholder="Ex.: 000000SP"
                required />

              <label className="form-label">Procedimento:</label>
              <input
                className="form-input"
                type="text"
                name="procedureName"
                onChange={(e) => setProcedureName(e.target.value)}
                placeholder="Ex.: Colonoscopia"
                maxLength="255"
                required />

              <div className="button-div">
                <button className="btn-input" type="submit">Cadastrar</button>
                <button className="btn-input"  onClick={() => navigate("/")}>Cancelar</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>

  )
}

export default ExamRegister;