const selectedCardsReducer = (
    state=[],
    action
) => {
    switch(action.type) {
        case 'SELECT_CARD':
            return [
                ...state,
                action.cardId
            ]
        case 'UNSELECT_CARD':
            return state.filter(id => id !== action.cardId)
        case 'UNSELECT_ALL_CARDS':
            return []
        default:
            return state
    }
}

export default selectedCardsReducer