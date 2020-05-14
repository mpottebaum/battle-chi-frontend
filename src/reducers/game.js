const gameReducer = (
    state = null,
    action
) => {
    switch(action.type) {
        case 'CREATE_GAME':
            return action.game
        case 'JOIN_GAME':
            return action.game
        default:
            return state
    }
}

export default gameReducer