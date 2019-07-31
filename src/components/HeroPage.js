import React, { Component } from "react";
import { connect } from "react-redux";

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
                <div>
                    <img
                        alt="hero"
                        src={
                            hero.thumbnail.path +
                            "/detail." +
                            hero.thumbnail.extension
                        }
                        className="my-3"
                    />
                    <h2>{hero.name}</h2>
                    <div>{hero.description}</div>
                    <List
                        typeOfList="comics"
                        heroId={this.props.match.params.id}
                    />
                    <List
                        typeOfList="series"
                        heroId={this.props.match.params.id}
                    />
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
