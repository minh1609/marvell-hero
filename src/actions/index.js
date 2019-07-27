import axios from "../api";

export const getHeros = () => async (dispatch, getState) => {
    const res = await axios.get("/characters");
    dispatch({ type: "GET_HEROS", payload: res.data.data });
};
