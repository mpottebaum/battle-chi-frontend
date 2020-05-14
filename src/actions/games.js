import { gamesUrl, HEADERS } from '../constants/index'

export const startCreateGame = () => {
    const configObj = {
        method: 'POST',
        headers: HEADERS
    }
    return dispatch => {
        dispatch({type: 'START_CREATE_GAME'})
        fetch(gamesUrl, configObj)
    }
}

export const startJoinGame = id => {
    const url = gamesUrl + `/${id}`
    return dispatch => {
        dispatch({type: 'START_JOIN_GAME'})
        fetch(url)
    }
}

export const addGame = game => {
    return dispatch => {
        dispatch({type: 'ADD_GAME', game: game})
    }
}