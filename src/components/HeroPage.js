import React, { Component } from "react";
import { connect } from "react-redux";
import { Accordion, Card, Button } from "react-bootstrap";

import { getHero } from "../actions";
import List from "./List";

export class HeroPage extends Component {
    state = {
        comics: {}
    };

    componentDidMount = async () => {
        this.props.getHero(this.props.match.params.id);
    };

    componentDidUpdate() {
        if (!this.props.hero) {
            this.props.getHero(this.props.match.params.id);
        }
    }

    render() {
        if (this.props.hero) {
            let hero = this.props.hero;
            return (
                <div className="mb-5">
                    <h1>{hero.name}</h1>
                    <img
                        alt="hero"
                        src={
                            hero.thumbnail.path +
                            "/detail." +
                            hero.thumbnail.extension
                        }
                        className="my-3"
                    />

                    <div>{hero.description}</div>

                    <h2>Appearance</h2>
                    <Accordion defaultActiveKey="0" className="my-3">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="dark"
                                    eventKey="0"
                                >
                                    Comics
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <List
                                        typeOfList="comics"
                                        heroId={this.props.match.params.id}
                                    />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="dark"
                                    eventKey="1"
                                >
                                    Events
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <List
                                        heroId={this.props.match.params.id}
                                        typeOfList="events"
                                    />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="dark"
                                    eventKey="2"
                                >
                                    Series
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
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
    hero: state.heros[ownProps.match.params.id]
});

const mapDispatchToProps = { getHero };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeroPage);
