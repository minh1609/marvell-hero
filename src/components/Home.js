import React, { Component } from "react";
import { connect } from "react-redux";

import { getHeros } from "actions/index";

class Home extends Component {
    componentDidMount() {
        this.props.getHeros();
        console.log(this.props);
    }

    componentDidUpdate() {
        console.log(this.props);
    }

    renderHeroList() {
        if (this.props.heros) {
            return this.props.heros.map(hero => (
                <div>
                    <div>{hero.name}</div>
                </div>
            ));
        } else {
            return <div>Loading ...</div>;
        }
    }

    render() {
        return (
            <div>
                {this.renderHeroList()}
                Heoo
            </div>
        );
    }
}

const mapStateToProps = state => ({
    heros: state.heros.results,
    numberOfHero: state.heros.total
});

const mapDispatchToProps = { getHeros };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
