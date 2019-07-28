//Convert Array to Object
const mapMyArray = (array, param) =>
    Object.assign({}, ...array.map(index => ({ [index[param]]: index })));

export default (state = {}, action) => {
    switch (action.type) {
        case "GET_HEROS":
            return { ...state, ...mapMyArray(action.payload.results, "id") };
        case "GET_HERO":
            return {
                ...state,
                [action.payload.results[0].id]: action.payload.results[0]
            };

        default:
            return state;
    }
};
