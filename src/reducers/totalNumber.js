export default (state = 0, action) => {
    switch (action.type) {
        case "GET_HEROS":
            return action.payload.total;
        default:
            return state;
    }
};
