const matchNeighborhoodCardsReducer = (state=[], action) => {
    switch(action.type) {
        case 'ADD_MATCH_NEIGHBORHOOOD_CARDS':
            return action.cards
        case 'CLEAR_MATCH_NEIGHBORHOOD_CARDS':
            return []
        default:
            return state
    }
}

export default matchNeighborhoodCardsReducer