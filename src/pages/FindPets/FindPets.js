import React, { Fragment } from "react";
import InputSearch from "../../Components/InputSearch/InputSearch";
import optionsSelect from "../../Helpers/SelectInput";
import filterImg from "../../assets/svg/filter.svg";
import Card from "../../Components/Card/Card";
import "./index.css";
const findPets = () => {
    return (
        <Fragment>
            <section className="container find-pets">
                <div className="menu-filter">
                    <p>
                        Refina sua busca{" "}
                        <object data={filterImg} type=""></object>
                    </p>
                    <div className="input-area">
                        <InputSearch name="sexo" options={optionsSelect.sexo} />
                        <InputSearch
                            name="idade"
                            options={optionsSelect.idade}
                        />
                        <InputSearch
                            name="porte"
                            options={optionsSelect.porte}
                        />
                    </div>
                </div>
                <p className="results-number">
                    <small>
                        <span>02</span> Resultados encontrados.
                    </small>
                </p>
                <div className="results-search">
                    <Card
                        photo="https://images.pexels.com/photos/4681107/pexels-photo-4681107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300"
                        gender="macho"
                        status="encontrado na rua"
                        city="Rio de Janeiro"
                        state="Copacabana"
                        name="Rubinho"
                    />
                    <Card
                        photo="https://images.pexels.com/photos/4681107/pexels-photo-4681107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300"
                        gender="macho"
                        status="encontrado na rua"
                        city="Rio de Janeiro"
                        state="Copacabana"
                        name="Rubinho"
                    />
                    <Card
                        photo="https://images.pexels.com/photos/4681107/pexels-photo-4681107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300"
                        gender="macho"
                        status="encontrado na rua"
                        city="Rio de Janeiro"
                        state="Copacabana"
                        name="Rubinho"
                    />
                    <Card
                        photo="https://images.pexels.com/photos/4681107/pexels-photo-4681107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300"
                        gender="macho"
                        status="encontrado na rua"
                        city="Rio de Janeiro"
                        state="Copacabana"
                        name="Rubinho"
                    />
                    <Card
                        photo="https://images.pexels.com/photos/4681107/pexels-photo-4681107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300"
                        gender="macho"
                        status="encontrado na rua"
                        city="Rio de Janeiro"
                        state="Copacabana"
                        name="Rubinho"
                    />
                    <Card
                        photo="https://images.pexels.com/photos/4681107/pexels-photo-4681107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300"
                        gender="macho"
                        status="encontrado na rua"
                        city="Rio de Janeiro"
                        state="Copacabana"
                        name="Rubinho"
                    />
                </div>
            </section>
        </Fragment>
    );
};

export default findPets;
