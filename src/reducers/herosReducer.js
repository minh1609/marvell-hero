export default (state = {}, action) => {
    switch (action.type) {
        case "GET_HEROS":
            const mapMyArray = (array, param) =>
                Object.assign(
                    {},
                    ...array.map(index => ({ [index[param]]: index }))
                );
            return { ...state, ...mapMyArray(action.payload.results, "id") };

        default:
            return state;
    }
};
