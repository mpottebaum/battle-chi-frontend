const gameReducer = (
    state = null,
    action
) => {
    switch(action.type) {
        case 'ADD_GAME':
            return action.game
        default:
            return state
    }
}

export default gameReducer