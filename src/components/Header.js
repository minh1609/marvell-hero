import React, { Component } from "react";

import { Link } from "react-router-dom";

export class Header extends Component {
    render() {
        return (
            <h1
                style={{
                    marginTop: "5%",
                    marginBottom: "5%",
                    textDecoration: "none",
                }}
            >
                Marvel Wikipedia
            </h1>
        );
    }
}

export default Header;
