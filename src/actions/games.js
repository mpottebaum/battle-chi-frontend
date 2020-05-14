import { gamesUrl, HEADERS } from '../constants/index'

export const createGame = () => {
    const configObj = {
        method: 'POST',
        headers: HEADERS
    }
    return dispatch => {
        dispatch({type: 'START_CREATE_GAME'})
        fetch(gamesUrl, configObj)
        .then(resp => resp.json())
        .then(game => {
            dispatch({type: 'CREATE_GAME', game: game})
        })
    }
}

export const joinGame = id => {
    const url = gamesUrl + `/${id}`
    return dispatch => {
        dispatch({type: 'START_JOIN_GAME'})
        fetch(url)
        .then(resp => resp.json())
        .then(game => {
            dispatch({type: 'JOIN_GAME', game: game})
        })
    }
}

export const updateGame = game => {
    return dispatch => {
        dispatch({type: 'UPDATE_GAME', game: game})
    }
}