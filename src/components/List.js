import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

import axios from "../api";
import "./List.css";

const List = (props) => {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            let res = await axios.get(
                `/characters/${props.heroId}/${props.typeOfList}`
            );
            setData(res.data.data);
        };
        fetchData();
    }, []);

    //MAP
    const renderList = () => {
        if (data.results) {
            return data.results.map((e) => {
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

    return (
        <div className="mb-5">
            <h5>
                Appear in {data.total} {props.typeOfList}
            </h5>

            <div className="list">{renderList()}</div>
        </div>
    );
};

// List.defaultProps = {
//     heroId: 1009144,
//     typeOfList: "comics",
// };

export default List;
