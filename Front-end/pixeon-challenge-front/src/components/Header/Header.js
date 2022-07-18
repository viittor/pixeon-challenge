import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Header = () => {
    return(
    <>
    <div id="header-container">
       <div id="logo-container">
        <Link to="/">
            {" "}
        <img src={Logo} id="logo"/>
        </Link>
       </div>
       <div className="menu-container">
       <div className="menu-title">CLÍNICAS</div>
       <div className="menu-list">        
        <Link to="/HealthcarePage" className="menu-item">Cadastrar Clínica</Link>        
        </div>
       </div>
       
       <div className="menu-container">
       <div className="menu-title">EXAMES</div>
       <div className="menu-list">        
       <Link to="/ExamRegister" className="menu-item">Cadastrar Exame</Link>
       <Link to="/ExamList" className="menu-item">Listar Exames</Link>
       <Link to="/ExamFind" className="menu-item">Encontrar Exame</Link>
       <Link to="/ExamUpdate" className="menu-item">Atualizar Exame</Link>
       <Link to="/ExamDelete" className="menu-item">Deletar Exame</Link>
       
        </div>

       </div>
       
       
    </div>   
    </>
    )
};

export default Header;