import React, { Fragment, useEffect, useState } from "react";
import InputSearch from "../../Components/InputSearch/InputSearch";
import optionsSelect from "../../Helpers/SelectInput";
import filterImg from "../../assets/svg/filter.svg";
import Card from "../../Components/Card/Card";
import axios from "../../services/axios";

import "./index.css";
const FindPets = () => {
    const [animal, setAnimal] = useState([]);
    const [count, setCount] = useState({});
    //APENAS TESTE COM AXIOS, DEVE UTILIZAR REDUX
    useEffect(() => {
        async function getData() {
            const response = await axios.get("/animals");
            const { data } = response;
            setAnimal(data);
            setCount(data);
            console.log(data);
        }

        getData();
    }, []);

    return (
        <Fragment>
            <section className="container find-pets">
                <div className="menu-filter">
                    <p>
                        Refina sua busca
                        <object data={filterImg} type=""></object>
                    </p>
                    <div className="input-area">
                        <InputSearch name="Sexo" options={optionsSelect.sexo} />
                        <InputSearch
                            name="Idade"
                            options={optionsSelect.idade}
                        />
                        <InputSearch
                            name="Porte"
                            options={optionsSelect.porte}
                        />
                    </div>
                </div>
                <p className="results-number">
                    <small>
                        <span>
                            {count.length < 10
                                ? `0${count.length}`
                                : count.length}
                        </span>{" "}
                        Resultados encontrados.
                    </small>
                </p>
                <div className="results-search">
                    {animal.map(
                        ({
                            _id,
                            city,
                            createAt,
                            district,
                            gender,
                            name,
                            photo_url,
                            status,
                        }) => {
                            return (
                                <Card
                                    key={_id}
                                    photo="https://images.pexels.com/photos/4681107/pexels-photo-4681107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300"
                                    gender={gender}
                                    status={status}
                                    city={city}
                                    state={district}
                                    name={name}
                                />
                            );
                        }
                    )}
                </div>
            </section>
        </Fragment>
    );
};

export default FindPets;
