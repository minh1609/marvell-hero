import React from "react";
import { Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeroImageBox = (props) => {
    let hero = props.hero;

    return (
        <Col lg={2} md={4} sm={6} className="hero-box my-5">
            <Link
                to={`/hero/${hero.id}`}
                style={{ textDecoration: "none", color: "grey" }}
            >
                <div>
                    <img
                        src={
                            hero.thumbnail.path +
                            "/standard_large." +
                            hero.thumbnail.extension
                        }
                        alt="hero"
                        className="neumorphism-1"
                    />
                </div>

                <br />
                <div className="my-2 neumorphism-1 hover-button">
                    {hero.name}
                </div>
            </Link>
        </Col>
    );
};

export default HeroImageBox;
