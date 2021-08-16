import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import menuHelpers from "./Helpers/Menu";
import Home from "./pages/Home";
import FindPets from "./pages/FindPets";
import Purpose from "./pages/Purpose";
import PrivacyPolicy from "./pages/PrivacyPolicy/index";
import PageNotFound from "./pages/PageNotFound/index";
import login from "./pages/Login/index";
function App() {
    return (
        <BrowserRouter>
            <Header links={menuHelpers} />
            <Switch>
                <Route path="/find-pets" component={FindPets} />
                <Route path="/purpose" component={Purpose} />
                <Route path="/privacy-polity" component={PrivacyPolicy} />
                <Route path="/login" component={login} />
                <Route exact path="/" component={Home} />
                <Route path="*" component={PageNotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
