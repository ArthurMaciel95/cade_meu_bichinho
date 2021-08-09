import React from "react";
import "./index.css";
const button = ({ children }) => {
    return (
        <a href="#" className="btn">
            {children}
        </a>
    );
};

export default button;
