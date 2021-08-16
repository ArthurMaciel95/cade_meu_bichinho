import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const button = ({ children, url }) => {
    return (
        <Link to={url} className="btn">
            {children}
        </Link>
    );
};

export default button;
