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
            localStorage.setItem('playerId', player.id)
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

export const fortify = (playerId, toNeighborhoodId, fromNeighborhoodId, numMilitia) => {
    const configObj = {
        method: 'PATCH',
        headers: HEADERS,
        body: JSON.stringify({
            player: {
                to_neighborhood_id: toNeighborhoodId,
                from_neighborhood_id: fromNeighborhoodId,
                num_militia: numMilitia
            }
        })
    }
    const url = playersUrl + `/${playerId}/fortify`
    return dispatch => {
        fetch(url, configObj)
    }
}