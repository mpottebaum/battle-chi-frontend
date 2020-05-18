const battlingReducer = (state=false, action) => {
    switch(action.type) {
        case 'START_BATTLE':
            return true
        case 'END_BATTLE':
            return false
        default:
            return state
    }
}

export default battlingReducer