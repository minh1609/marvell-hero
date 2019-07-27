export default (state = [], action) => {
    switch (action.type) {
        case "GET_HEROS":
            return action.payload || false;
        default:
            return state;
    }
};
