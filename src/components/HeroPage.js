import React, { Component } from "react";
import { connect } from "react-redux";

import { getHero } from "../actions";
import axios from "../api";
import List from "./List";

export class HeroPage extends Component {
    state = {
        comics: {}
    };

    componentDidMount = async () => {
        this.props.getHero(this.props.match.params.id);
        let comics = await axios.get(
            `/characters/${this.props.match.params.id}/comics`
        );
        console.log(comics.data);
        this.setState({ comics: comics.data.data });
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
                        name="Appear in comic"
                        dataToRendered={this.state.comics}
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
