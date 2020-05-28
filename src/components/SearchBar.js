import React, { Component } from "react";
import { InputGroup, FormControl, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./SearchBar.scss";

import axios from "../api";
//TODO: add redux to this component, add action
export class SearchBar extends Component {
    state = {
        totalSuggestions: 0,
        baseSugestion: [], //only change when fetch new data
        suggestion: [], //change when fetch new data or filter from baseSugestion
        formValue: "",
        isLoadingData: false,
    };

    renderSuggestion = () => {
        return this.state.suggestion.map((hero) => (
            <Link
                onClick={() => {
                    this.setState({ suggestion: [], formValue: "" });
                }}
                to={`/hero/${hero.id}`}
                key={hero.id}
            >
                <Button variant="outline-dark" className="m-2 ">
                    {hero.name}
                </Button>
            </Link>
        ));
    };

    renderButton() {
        if (!this.state.isLoadingData && this.state.suggestion.length > 0) {
            return (
                <button
                    onClick={() => {
                        this.setState({
                            suggestion: [],
                            formValue: "",
                        });
                    }}
                >
                    close suggestion
                </button>
            );
        } else if (
            this.state.isLoadingData &&
            this.state.formValue.length > 0
        ) {
            return (
                <button>
                    <Spinner animation="border" as="span" size="sm" />
                </button>
            );
        } else {
            return null;
        }
    }

    handleInputChange = async (event) => {
        this.setState({ formValue: event.target.value });
        let formValue = event.target.value;

        // no-limit api solution: every time user modify input
        //, browser make a request with that input, get back hero list has name start with that input) ==> too much api call from browser

        //THIS IS LIMIT API CALL SOLUTION,
        //Only fetch data if form value is 3 character
        if (formValue.length === 3) {
            this.setState({ isLoadingData: true });
            const res = await axios.get("/characters", {
                params: { nameStartsWith: event.target.value, limit: 50 },
            });
            this.setState({
                baseSugestion: res.data.data.results,
                totalSuggestions: res.data.data.total,
                suggestion: res.data.data.results,
                isLoadingData: false,
            });
        } else if (formValue.length > 3) {
            let newSuggestion = this.state.baseSugestion.filter((data) =>
                data.name.toLowerCase().includes(formValue.toLowerCase())
            );

            this.setState({ suggestion: newSuggestion });

            //Remove all suggestion
        } else if (formValue.length === 0) {
            this.setState({ suggestion: [] });

            //More than 4 character, filter result from base suggestion
        }
    };

    render() {
        return (
            <div className="mb-5">
                <input
                    placeholder="Enter more than 3 characters to search"
                    aria-describedby="basic-addon2"
                    autoComplete="off"
                    value={this.state.formValue}
                    onChange={this.handleInputChange}
                    className="mb-3"
                />

                {this.renderButton()}
                <div className="" style={{ textAlign: "left" }}>
                    {this.renderSuggestion()}
                </div>
            </div>
        );
    }
}

export default SearchBar;
