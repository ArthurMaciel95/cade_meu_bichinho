import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/cade_meu_bichinho_logo 1.png";
import Button from "../Button/button";
import logoTexto from "../../assets/image/Cadê Meu Bichinho_.png";
import "./index.css";
const Header = ({ links }) => {
    return (
        <header>
            <nav>
                <ul className="logo-area">
                    <li>
                        <img src={logo} alt="logo" className="logo" />
                    </li>
                    <li>
                        <img
                            src={logoTexto}
                            alt="logo texto"
                            className="logo-text"
                        />
                    </li>
                </ul>
                <ul className="menu">
                    {links.map(({ name, link }) => {
                        return (
                            <li>
                                <Link to={link}>{name}</Link>
                            </li>
                        );
                    })}
                </ul>
                <ul className="btn-area">
                    <Button>Anunciar</Button>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
