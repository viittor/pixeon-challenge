import React from "react";
import Header from "../../components/Header/Header";
import Logo from "../../assets/logo.png";

const Home = () => {
    return (
        <>
            <div className="main-container">
                <Header />

                <div className="individual-page">
                    <div id="home-container">
                    <h1>Seja bem vindo!</h1>
                    <img src={Logo} id="logo-home"></img>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Home;