const currentPlayerReducer = (
    state = null,
    action
) => {
    switch(action.type) {
        // case 'ADD_PLAYER':
        //     return action.player
        case 'CREATE_PLAYER':
            return action.player
        default:
            return state
    }
}

export default currentPlayerReducer