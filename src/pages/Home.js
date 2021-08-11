import React, { Fragment } from "react";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import SearchField from "../Components/SearchField/searchField";
import dogHero from "../assets/image/dois-cachorros.png";
const Home = () => {
    return (
        <Fragment>
            <Hero
                headerOne="Encontre seu melhor amigo"
                para="perdido ou encontre alguem doando por perto"
                image={dogHero}
                accessibility="dois cachorros felizes"
            />
            <SearchField />
        </Fragment>
    );
};

export default Home;
