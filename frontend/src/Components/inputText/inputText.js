import React from "react";
import "./index.css";
const InputText = ({ name, type }) => {
    return (
        <label>
            <input
                className="input-text"
                type={type}
                name={name}
                id=""
                placeholder="  "
            />
            <span>{name}</span>
        </label>
    );
};

export default InputText;
