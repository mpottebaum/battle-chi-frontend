import { playersUrl, HEADERS } from '../constants/index'

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

export const tradeCards = (cardIds, playerId) => {
    const configObj = {
        method: 'PATCH',
        headers: HEADERS,
        body: JSON.stringify({card_ids: cardIds})
    }
    const url = playersUrl + `${playerId}/cards/trade`
    return dispatch => {
        dispatch({type: 'UNSELECT_ALL_CARDS'})
        fetch(url, configObj)
    }
}