const defaultState = {
    meState: {},
}

const MeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'INIT_ME':
            return Object.assign({}, state, {
                meState: action.value
            });
        default:
            return state;
    }
}

export default MeReducer;