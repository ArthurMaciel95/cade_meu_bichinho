import React, { Fragment } from "react";
import "./index.css";
import male from "../../assets/svg/male.svg";
import female from "../../assets/svg/female.svg";

const Card = ({ photo, name, city, state, gender, status }) => {
    return (
        <Fragment>
            <div className="card">
                <img src={photo} alt="foto animal de estimação" />
                <div className="card-body">
                    <h3>{name}</h3>
                    <small>
                        {city} | {state}
                    </small>
                    <p>
                        {gender}
                        {gender === "Macho" ? (
                            <object data={male} type=""></object>
                        ) : (
                            <object data={female} type=""></object>
                        )}
                    </p>
                    <span>{status}</span>
                </div>
            </div>
        </Fragment>
    );
};

export default Card;
