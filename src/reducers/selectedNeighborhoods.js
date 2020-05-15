const selectedNeighborhoodsReducer = (state=[], action) => {
    switch(action.type) {
        case 'SELECT_NEIGHBORHOOD':
            return [
                ...state,
                action.neighborhoodName
            ]
        case 'UNSELECT_NEIGHBORHOOD':
            return state.filter(neighborhoodName => neighborhoodName !== action.neighborhoodName)
        default:
            return state
    }
}

export default selectedNeighborhoodsReducer