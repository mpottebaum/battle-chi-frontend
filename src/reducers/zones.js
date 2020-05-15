const zonesReducer = (state=[], action) => {
    switch(action.type) {
        case 'ADD_NEIGHBORHOODS':
            return action.zones
        default:
            return state
    }
}

export default zonesReducer