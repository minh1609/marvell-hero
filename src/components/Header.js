import React, { Component } from "react";

import { Link } from "react-router-dom";

export class Header extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
                <Link class="navbar-brand font" to="/">
                    MARVEL
                </Link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon" />
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link" to="/infinity">
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
