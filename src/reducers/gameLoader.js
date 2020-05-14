const gameLoaderReducer = (state=true, action) => {
    switch(action.type) {
        case 'START_CREATE_GAME':
            return true
        case 'START_JOIN_GAME':
            return true
        case 'ADD_GAME':
            return false
        default:
            return state
    }
}

export default gameLoaderReducer