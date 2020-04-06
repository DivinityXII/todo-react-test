const defaultState = {
    someState: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
}

const SomeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'INIT_SOME_STATE':
            return Object.assign({}, state, {
                someState: action.value
            });
        default:
            return state;
    }
}

export default SomeReducer;