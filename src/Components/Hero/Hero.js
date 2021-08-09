import React from "react";
import dogHero from "../../assets/image/dois-cachorros.png";

import "./index.css";
const Hero = () => {
    return (
        <section className="hero">
            <div className="header-text">
                <h1>Encontre seu melhor amigo</h1>
                <p>perdido ou encontre alguem doando por perto.</p>
            </div>
            <div className="image-area">
                <img src={dogHero} alt="dois cachorros" />
            </div>
        </section>
    );
};

export default Hero;
