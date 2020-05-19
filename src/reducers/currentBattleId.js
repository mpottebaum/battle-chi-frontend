const currentBattleIdReducer = (state=null, action) => {
    switch(action.type) {
        case 'START_BATTLE':
            return action.battleId
        case 'END_BATTLE':
            return null
        default:
            return state
    }
}

export default currentBattleIdReducer