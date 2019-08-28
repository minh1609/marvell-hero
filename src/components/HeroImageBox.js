import React, { Component } from "react";
import { Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export class HeroImageBox extends Component {
    render() {
        let hero = this.props.hero;
        return (
            <Col md={4} lg={3} sm={6} className="hero-box my-5">
                <img
                    src={
                        hero.thumbnail.path +
                        "/standard_large." +
                        hero.thumbnail.extension
                    }
                    alt="hero"
                />
                <br />
                <Link to={`/hero/${hero.id}`}>
                    <Button variant="outline-info" className="my-2">
                        {hero.name}
                    </Button>
                </Link>
            </Col>
        );
    }
}

export default HeroImageBox;
