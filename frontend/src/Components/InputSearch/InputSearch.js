import React, { Fragment } from "react";
import "./index.css";
const inputSearch = ({ name, options }) => {
    return (
        <Fragment>
            <label htmlFor="">
                <select className="input-filter" name={name.toLowerCase()}>
                    {options.map((option, index) => {
                        return <option key={index}>{option}</option>;
                    })}
                </select>
                <span className="input-name">{name}</span>
            </label>
        </Fragment>
    );
};

export default inputSearch;
