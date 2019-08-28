import React, { Component } from "react";
import { connect } from "react-redux";
import { Spinner } from "react-bootstrap";

import { getHero } from "../actions";
import HeroImageBox from "./HeroImageBox";

export class InfinityWar extends Component {
    state = {
        baseTeam: [
            1009368, //ironman
            1009220, //captain america
            1009338, //hawkeye
            1009351, //hulk
            1009189, //black widow
            1009562, //scarlett witch
            1009187, //black panther
            1009697 //vision
        ],
        aliveTeam: [1009368, 1009220, 1009338],
        currentTeam: []
    };

    componentDidMount() {
        this.state.baseTeam.forEach(e => {
            this.props.getHero(e);
        });
        this.setState({ currentTeam: [...this.state.baseTeam] });
    }

    renderHeroList() {
        if (this.props.heros) {
            return this.props.heros.map(hero => (
                <HeroImageBox hero={hero} key={hero.id} />
            ));
        } else {
            return <Spinner animation="border" />;
        }
    }

    renderSnapBtn = () => {
        return <button className="btn btn-dark mx-auto">Snap</button>;
    };

    snap = () => {};

    render() {
        return (
            <React.Fragment>
                <div className="row">{this.renderHeroList()}</div>
                {this.renderSnapBtn()}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    heros: Object.values(state.heros)
});

const mapDispatchToProps = { getHero };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InfinityWar);
