import React, { Component } from "react";

import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" className="mb-3 sticky-top">
                <Link to="/">
                    <Navbar.Brand>MARVEL</Navbar.Brand>
                </Link>
                <Nav className="mr-auto">
                    <Nav.Link to="/">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default Header;
