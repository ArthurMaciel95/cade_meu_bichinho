import React from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import SearchField from "./Components/SearchField/searchField";
import menuHelpers from "./Helpers/Menu";

function App() {
    return (
        <div>
            <Header links={menuHelpers} />
            <Hero />
            <SearchField />
        </div>
    );
}

export default App;
