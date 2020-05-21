export const selectCard = cardId => {
    return dispatch => {
        dispatch({type: 'SELECT_CARD', cardId: cardId})
    }
}

export const unselectCard = cardId => {
    return dispatch => {
        dispatch({type: 'UNSELECT_CARD', cardId: cardId})
    }
}

export const tradeCards = cardIds => {
    return dispatch => {
        dispatch({type: 'UNSELECT_ALL_CARDS'})
    }
}