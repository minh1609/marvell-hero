import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Route, Switch, HashRouter } from "react-router-dom";

import Home from "./components/Home";
import HeroPage from "./components/HeroPage";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import "./App.css";

export class App extends Component {
    render() {
        return (
            <Container style={{ textAlign: "center" }}>
                <HashRouter basename="/">
                    <Header />
                    <SearchBar />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/hero/:id" exact component={HeroPage} />
                    </Switch>
                </HashRouter>
            </Container>
        );
    }
}

export default App;
