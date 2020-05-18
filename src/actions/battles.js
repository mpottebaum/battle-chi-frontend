import { playersUrl, HEADERS } from '../constants/index'

export const createBattle = (battleData, playerId) => {
    const configObj = {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify({
            battle: battleData
        })
    }
    const url = playersUrl + `/${playerId}/battles`
    return dispatch => {
        dispatch({type: 'START_LOAD_BATTLE'})
        fetch(url, configObj)
    }
}

export const setBattleDefense = (numMilitia, playerId, battleId) => {
    const configObj = {
        method: 'PATCH',
        headers: HEADERS,
        body: JSON.stringify({
            battle: {
                defense_militia: numMilitia
            }
        })
    }
    const url = playersUrl + `/${playerId}/battles/${battleId}`
    return dispatch => {
        fetch(url, configObj)
    }
}