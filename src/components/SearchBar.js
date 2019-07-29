import React, { Component } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import axios from "../api";
//TODO: add redux to this component, add action
export class SearchBar extends Component {
    state = {
        totalSuggestions: 0,
        suggestion: [],
        formValue: ""
    };

    renderSuggestion = () => {
        return this.state.suggestion.map(hero => (
            <Link
                onClick={() => {
                    this.setState({ suggestion: [], formValue: "" });
                }}
                to={`/hero/${hero.id}`}
                key={hero.id}
            >
                <Button variant="outline-dark" className="m-2">
                    {hero.name}
                </Button>
            </Link>
        ));
    };

    handleInputChange = async event => {
        this.setState({ formValue: event.target.value });

        //Give suggestion if enter value is 3 character
        if (event.target.value.length === 3) {
            const res = await axios.get("/characters", {
                params: { nameStartsWith: event.target.value }
            });
            this.setState({
                suggestion: res.data.data.results,
                totalSuggestions: res.data.data.total
            });
            console.log(res.data.data);

            //Remove all suggestion if enter == 0
        } else if (event.target.value.length == 0) {
            this.setState({ suggestion: [] });
        }
    };

    render() {
        return (
            <div className="mb-5">
                <InputGroup>
                    <FormControl
                        placeholder="Find Your favourite Hero"
                        aria-describedby="basic-addon2"
                        autoComplete="off"
                        value={this.state.formValue}
                        onChange={this.handleInputChange}
                    />
                    <InputGroup.Append>
                        <Button
                            variant="outline-danger"
                            onClick={() => {
                                this.setState({ suggestion: [] });
                            }}
                        >
                            Close Suggestion
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
                <div className="mx-2">{this.renderSuggestion()}</div>
            </div>
        );
    }
}

export default SearchBar;
