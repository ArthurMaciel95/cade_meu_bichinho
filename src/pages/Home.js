import React, { Fragment } from "react";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import SearchField from "../Components/SearchField/searchField";

const Home = () => {
    return (
        <Fragment>
            <Hero />
            <SearchField />
        </Fragment>
    );
};

export default Home;
