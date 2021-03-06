import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Button, Spinner } from "react-bootstrap";

import { getHeros } from "actions/index";
import HeroImageBox from "./HeroImageBox";

class Home extends Component {
    componentDidMount() {
        this.props.getHeros();
    }

    renderNumber = () => {
        if (this.props.heros) {
            return (
                <div variant="primary" className="neumorphism-1 py-3">
                    {this.props.heros.length} of total{" "}
                    {this.props.totalNumberOfHero}
                </div>
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
                    className="my-4"
                >
                    Load more{" "}
                </Button>
            );
        }
    }

    renderHeroList = () => {
        if (this.props.heros) {
            return this.props.heros.map((hero) => (
                <HeroImageBox hero={hero} key={hero.id} />
            ));
        } else {
            return <Spinner animation="border" />;
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

const mapStateToProps = (state) => ({
    heros: Object.values(state.heros),
    totalNumberOfHero: state.totalNumberOfHero,
});

const mapDispatchToProps = { getHeros };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
