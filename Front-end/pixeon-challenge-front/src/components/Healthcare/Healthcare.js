import React, { useState } from "react";

const Healthcare = () => {
    const [name, setName] = useState("");
    const [cnpj, setCnpj] = useState("");

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            if (!name) {
                alert("Por favor preencha o nome do clínica");
                return;
            } else if (!cnpj) {
                alert("Por favor preencha o CNPJ");
                return;
            }
            await fetch("http://localhost:8080/healthcare", {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                method: "POST",
                mode: "no-cors",
                body: JSON.stringify({
                    name: name,
                    cnpj: cnpj
                }),
            });
            console.log(name);
            console.log(cnpj);
            alert("Clínica cadastrada com sucesso!");
        } catch (error) {
            alert(
                "Não foi possivel concluir a sua solicitação! Por favor tente novamente."
            );
        }
    };

    return (
        <div className="individual-page">
            <h1 className="h1-page">Cadastrar Clínica</h1>

            <div className="form-container">
                <form className="form-health"  onSubmit={handleSubmit}>
                    <label className="form-label">Nome:</label>
                    <input
                        className="form-input"
                        type="text"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        maxLength="100"
                        required
                    />
                    <label className="form-label">CNPJ:</label>
                    <input
                        className="form-input" 
                        type="text"
                        name="cnpj"
                        onChange={(e) => setCnpj(e.target.value)}
                        maxLength="14"
                        required />

                    <div className="button-div">
                        <button className="btn-input" type="submit">Cadastrar</button>
                        <button className="btn-input">Cancelar</button>
                    </div>

                </form>
            </div>
        </div>

    )
}

export default Healthcare;