import { gamesUrl, playersUrl, HEADERS } from '../constants/index'

export const createPlayer = playerData => {
    const configObj = {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify(playerData)
    }
    return dispatch => {
        dispatch({type: 'START_CREATE_PLAYER'})
        fetch(playersUrl, configObj)
        .then(resp => resp.json())
        .then(player => {
            dispatch({type: 'CREATE_PLAYER', player: player})
        })
    }
}

export const addPlayer = player => {
    return dispatch => {
        dispatch({type: 'ADD_PLAYER', player: player})
        // const url = gamesUrl + `/${player.game_id}`
        // fetch(url)
    }
}