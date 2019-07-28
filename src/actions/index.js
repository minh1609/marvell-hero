import axios from "../api";

export const getHeros = (offset = 0) => async (dispatch, getState) => {
    const res = await axios.get("/characters", { params: { offset } });
    dispatch({ type: "GET_HEROS", payload: res.data.data });
};

//fetch data from individual hero by heroID
export const getHero = heroID => async (dispatch, getState) => {
    const res = await axios.get(`/characters/${heroID}`);
    dispatch({ type: "GET_HERO", payload: res.data.data });
};
