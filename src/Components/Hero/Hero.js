import React from "react";
import Button from "../Button/button";
import "./index.css";
const Hero = ({
    headerOne,
    para,
    para2,
    info,
    image,
    accessibility,
    button,
}) => {
    return (
        <section className="hero">
            <div className="header-text">
                <h1>{headerOne}</h1>
                <p className="para">{para}</p>
                {para2 ? <p className="para2">{para2}</p> : null}
                {info ? <small>{info}</small> : null}
                {button ? (
                    <Button url="/">Voltar para a Página inicial</Button>
                ) : null}
            </div>
            <div className="image-area">
                <img src={image} alt={accessibility} />
            </div>
        </section>
    );
};

export default Hero;
