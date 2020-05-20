const gameLoaderReducer = (state=true, action) => {
    switch(action.type) {
        case 'START_CREATE_GAME':
            return true
        case 'START_JOIN_GAME':
            return true
        case 'START_ADD_GAME':
            return true
        case 'CREATE_GAME':
            return false
        case 'JOIN_GAME':
            return false
        case 'ADD_GAME':
            return false
        default:
            return state
    }
}

export default gameLoaderReducer