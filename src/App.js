import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import HeroPage from "./components/HeroPage";
import Header from "./components/Header";

import history from "./history";

export class App extends Component {
    render() {
        return (
            <Container style={{ textAlign: "center" }}>
                <Router history={history}>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/hero/:id" exact component={HeroPage} />
                    </Switch>
                </Router>
            </Container>
        );
    }
}

export default App;
