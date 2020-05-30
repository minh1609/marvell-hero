import React, { Component } from "react";
import { connect } from "react-redux";
import { Accordion, Card, Button } from "react-bootstrap";

import { getHero } from "../actions";
import List from "./List";
import axios from "axios";

export class HeroPage extends Component {
    state = {
        details: {},
    };

    componentDidMount = async () => {
        this.props.getHero(this.props.match.params.id);
        if (this.props.hero) {
            const res = await axios.get(this.props.hero.urls[0].url);
            console.log(res.data);
            console.log(this.props.hero);
        }
    };

    componentDidUpdate = () => {
        if (!this.props.hero) {
            this.props.getHero(this.props.match.params.id);
        }
    };

    render() {
        if (this.props.hero) {
            let hero = this.props.hero;
            return (
                <div className="mb-5" style={{ color: "grey" }}>
                    <div
                        className="sticky-top p-2"
                        style={{ backgroundColor: "#dde1e7" }}
                    >
                        <h2>{hero.name}</h2>
                    </div>
                    <img
                        alt="hero"
                        src={
                            hero.thumbnail.path +
                            "/detail." +
                            hero.thumbnail.extension
                        }
                        className="my-3 neumorphism-1"
                    />

                    <div className="m-3">{hero.description}</div>

                    <h2>Appearance</h2>
                    <Accordion
                        className="my-3 neumorphism-1"
                        defaultActiveKey="0"
                    >
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle eventKey="0">
                                    Comics
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body className="neumorphism-2">
                                    <List
                                        typeOfList="comics"
                                        heroId={this.props.match.params.id}
                                    />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle eventKey="1">
                                    Events
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body className="neumorphism-2">
                                    <List
                                        heroId={this.props.match.params.id}
                                        typeOfList="events"
                                    />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle eventKey="2">
                                    Series
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body className="neumorphism-2">
                                    <List
                                        heroId={this.props.match.params.id}
                                        typeOfList="series"
                                    />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
            );
        } else {
            return <div>Loading ...</div>;
        }
    }
}

const mapStateToProps = (state, ownProps) => ({
    hero: state.heros[ownProps.match.params.id],
});

const mapDispatchToProps = { getHero };

export default connect(mapStateToProps, mapDispatchToProps)(HeroPage);
