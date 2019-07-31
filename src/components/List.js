import React, { Component } from "react";
import { Spinner } from "react-bootstrap";

import axios from "../api";
import "./List.css";

export class List extends Component {
    state = {
        data: {}
    };
    componentDidMount = async () => {
        let res = await axios.get(
            `/characters/${this.props.heroId}/${this.props.typeOfList}`
        );
        this.setState({ data: res.data.data });
        console.log(res.data.data);
    };

    renderList = () => {
        if (this.state.data.results) {
            return this.state.data.results.map(e => {
                return (
                    <div
                        className="media mb-2"
                        style={{ textAlign: "left" }}
                        key={e.id}
                    >
                        <img
                            src={
                                e.thumbnail.path +
                                "/standard_medium." +
                                e.thumbnail.extension
                            }
                            alt="comic"
                            className="mr-3"
                            height="64px"
                            width="64px"
                        />

                        <div className="media-body">
                            <h6 className="mt-0 mb-1">{e.title}</h6>
                            {e.description}
                        </div>
                    </div>
                );
            });
        } else {
            return <Spinner animation="grow" variant="primary" />;
        }
    };

    render() {
        return (
            <div className="mb-5">
                <h5>
                    Appear in {this.state.data.total} {this.props.typeOfList}
                </h5>

                <div className="list">{this.renderList()}</div>
            </div>
        );
    }
}

List.defaultProps = {
    heroId: 1009144,
    typeOfList: "comics"
};

export default List;
