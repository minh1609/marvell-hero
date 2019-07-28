import React, { Component } from "react";
import { Container } from "react-bootstrap";

import Home from "./components/Home";

export class App extends Component {
    render() {
        return (
            <Container style={{ textAlign: "center" }}>
                <Home />
            </Container>
        );
    }
}

export default App;
