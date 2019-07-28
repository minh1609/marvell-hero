import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { getHeros } from "actions/index";

class Home extends Component {
    componentDidMount() {
        this.props.getHeros();
    }

    renderNumber = () => {
        if (this.props.heros) {
            return (
                <Alert variant="primary">
                    {this.props.heros.length} of total{" "}
                    {this.props.totalNumberOfHero}
                </Alert>
            );
        }
    };

    renderLoadMoreButton() {
        if (
            this.props.heros &&
            this.props.heros.length < this.props.totalNumberOfHero
        ) {
            return (
                <Button
                    variant="light"
                    onClick={() => this.props.getHeros(this.props.heros.length)}
                >
                    Get More ...{" "}
                </Button>
            );
        }
    }

    renderHeroList = () => {
        if (this.props.heros) {
            return this.props.heros.map(hero => (
                <Col
                    md={4}
                    lg={3}
                    sm={6}
                    key={hero.id}
                    className="hero-box my-5"
                >
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
            ));
        } else {
            return <div>Loading ...</div>;
        }
    };

    render() {
        return (
            <React.Fragment>
                <Row>{this.renderHeroList()}</Row>
                {this.renderNumber()}
                {this.renderLoadMoreButton()}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    heros: Object.values(state.heros),
    totalNumberOfHero: state.totalNumberOfHero
});

const mapDispatchToProps = { getHeros };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
