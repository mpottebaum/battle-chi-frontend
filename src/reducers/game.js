const gameReducer = (
    state = null,
    action
) => {
    switch(action.type) {
        case 'CREATE_GAME':
            return action.game
        case 'JOIN_GAME':
            return action.game
        case 'ADD_GAME':
            return action.game
        case 'UPDATE_GAME':
            return {
                ...state,
                ...action.game
            }
        case 'CLEAR_GAME':
            return null
        // case 'UPDATE_GAME_MILITIA':
        //     return {
        //         ...state,
        //         ...action.game
        //     }
        default:
            return state
    }
}

export default gameReducer