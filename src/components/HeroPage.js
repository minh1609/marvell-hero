import React, { Component } from "react";
import { connect } from "react-redux";

import { getHero } from "../actions";
import axios from "../api";

export class HeroPage extends Component {
    componentDidMount() {
        this.props.getHero(this.props.match.params.id);
    }

    componentDidUpdate() {
        this.props.getHero(this.props.match.params.id);
    }

    render() {
        if (this.props.hero) {
            let hero = this.props.hero;
            return (
                <div>
                    <img
                        alt="hero"
                        src={
                            hero.thumbnail.path +
                            "/detail." +
                            hero.thumbnail.extension
                        }
                    />
                    <h4>{hero.name}</h4>
                    <div>{hero.description}</div>
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
