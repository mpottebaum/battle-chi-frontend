const militiaPlacedReducer = (state = 0, action) => {
    switch(action.type) {
        case 'INCREASE_MILITIA_PLACED':
            return state + 1
        case 'RESET_MILITIA_PLACED':
            return 0
        default:
            return state
    }
}

export default militiaPlacedReducer