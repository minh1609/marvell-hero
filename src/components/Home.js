import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Alert, Button } from "react-bootstrap";

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
            return <Button variant="light">Get More ... </Button>;
        }
    }

    renderHeroList = () => {
        if (this.props.heros) {
            return this.props.heros.map(hero => (
                <Col md={4} lg={3} sm={6} key={hero.id} className="hero-box">
                    <img
                        src={
                            hero.thumbnail.path +
                            "/standard_large." +
                            hero.thumbnail.extension
                        }
                        alt="hero"
                    />
                    <div>{hero.name}</div>
                </Col>
            ));
        } else {
            return <div>Loading ...</div>;
        }
    };

    render() {
        return (
            <React.Fragment>
                {this.renderNumber()}
                <Row>{this.renderHeroList()}</Row>
                {this.renderLoadMoreButton()}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    heros: state.heros.results,
    totalNumberOfHero: state.heros.total
});

const mapDispatchToProps = { getHeros };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
