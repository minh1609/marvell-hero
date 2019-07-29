import React, { Component } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import axios from "../api";

export class SearchBar extends Component {
    state = {
        totalSuggestions: 0,
        suggestion: [],
        formValue: ""
    };

    renderSuggestion = () => {
        return this.state.suggestion.map(hero => (
            <Link to={`/hero/${hero.id}`}>
                <div>{hero.name}</div>
            </Link>
        ));
    };

    handleInputChange = async event => {
        this.setState({ formValue: event.target.value });

        //Give suggestion if enter more than 2 character
        if (event.target.value.length >= 2) {
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
