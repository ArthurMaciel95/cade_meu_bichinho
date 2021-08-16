import React from "react";
import { Link } from "react-router-dom";
import googleIcon from "../../assets/svg/google-icon.svg";
import gatosImg from "../../assets/image/dois-gatos.png";
import "./index.css";
import InputText from "../../Components/inputText/inputText";
import Button from "../../Components/Button/button";
const Login = () => {
    return (
        <section className="container login-page">
            <div className="login-area">
                <h2>Faça Login</h2>
                <button>
                    <object data={googleIcon} type=""></object>
                    <span>Faça login com uma conta Google.</span>
                </button>
                <span className="intersection"> ou </span>
                <InputText type="text" name="Email" />
                <InputText type="password" name="Password" />
                <Link to="/register">Não tenho uma conta.</Link>
                <Button url="/register">Fazer Login</Button>
            </div>
            <div className="image-hero">
                <img
                    className="image-hero-login"
                    src={gatosImg}
                    alt="dois gatos em uma caixa de papelão"
                />
            </div>
        </section>
    );
};

export default Login;
