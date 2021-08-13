import React, { Fragment } from "react";
import "./index.css";
const inputSearch = ({ name, options }) => {
    return (
        <Fragment>
            <select className="input-filter" name={name}>
                {options.map((option, index) => {
                    return <option key={index}>{option}</option>;
                })}
            </select>
        </Fragment>
    );
};

export default inputSearch;
