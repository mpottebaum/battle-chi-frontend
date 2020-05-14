import { playersUrl, HEADERS } from '../constants/index'

export const startCreatePlayer = playerData => {
    const configObj = {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify(playerData)
    }
    return dispatch => {
        dispatch({type: 'START_CREATE_PLAYER'})
        fetch(playersUrl, configObj)
    }
}

export const addPlayer = player => {
    return dispatch => {
        dispatch({type: 'ADD_PLAYER', player: player})
    }
}