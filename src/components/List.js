import React, { Component } from "react";

export class List extends Component {
    renderList = () => {
        if (this.props.dataToRendered.results) {
            return this.props.dataToRendered.results.map(e => {
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
        }
    };

    render() {
        return (
            <div className="mb-5">
                <h4>{this.props.name}</h4>
                {this.renderList()}
            </div>
        );
    }
}

export default List;
