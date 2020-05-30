import React, { Component } from "react";
import { useHistory } from "react-router-dom";

const Header = () => {
    const history = useHistory();

    return (
        <h1
            style={{
                marginTop: "5%",
                marginBottom: "5%",
                textDecoration: "none",
                cursor: "pointer",
            }}
            onClick={() => {
                history.push("/");
            }}
        >
            Marvel Wikipedia
        </h1>
    );
};

export default Header;
