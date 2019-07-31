import React, { Component } from "react";

import { Link } from "react-router-dom";

export class Header extends Component {
    render() {
        return (
            <nav className="navbar navbarNav navbar-expand-lg navbar-dark bg-dark mb-3">
                <Link className="navbar-brand font" to="/">
                    MARVEL
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/infinity">
                                Infinity War
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;
