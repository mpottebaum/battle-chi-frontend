const battleLoaderReducer = (state=false, action) => {
    switch(action.type) {
        case 'START_BATTLE_LOADER':
            return true
        case 'START_BATTLE':
            return false
        default:
            return state
    }
}

export default battleLoaderReducer