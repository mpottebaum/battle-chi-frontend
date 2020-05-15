const neighborhoodsReducer = (state=[], action) => {
    switch(action.type) {
        case 'ADD_NEIGHBORHOODS':
            return action.neighborhoods
        default:
            return state
    }
}

export default neighborhoodsReducer