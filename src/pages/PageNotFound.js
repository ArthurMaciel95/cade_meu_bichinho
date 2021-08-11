import React, { Fragment } from "react";
import Hero from "../Components/Hero/Hero";
import dogErroImage from "../assets/image/cachorro-mordendo-pente.png";

const PageNotFound = () => {
    return (
        <Fragment>
            <Hero
                headerOne="Que Pena,"
                para="Nossos Companheiros não acharam o Link requisitado."
                para2="Página não encontrada!"
                info="(Error 404 Page not found)"
                image={dogErroImage}
                accessibility="cachorro com pinta laranja mordendo um escova de dente"
                button={true}
            />
        </Fragment>
    );
};

export default PageNotFound;
