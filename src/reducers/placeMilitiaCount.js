const placeMilitiaCountReducer = (state = 1, action) => {
    switch(action.type) {
        case 'SET_PLACE_MILITIA_COUNT':
            return action.placeMilitiaCount
        default:
            return state
    }
}

export default placeMilitiaCountReducer