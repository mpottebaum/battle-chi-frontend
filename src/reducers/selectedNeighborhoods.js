const selectedNeighborhoodsReducer = (state=[], action) => {
    switch(action.type) {
        case 'SELECT_NEIGHBORHOOD':
            return [
                ...state,
                action.neighborhoodName
            ]
        default:
            return state
    }
}

export default selectedNeighborhoodsReducer