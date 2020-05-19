const defendingReducer = (state=false, action) => {
    switch(action.type) {
        case 'START_BATTLE':
            return true
        case 'END_DEFENSE':
            return false
        default:
            return state
    }
}

export default defendingReducer