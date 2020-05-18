import { playersUrl, HEADERS } from '../constants/index'

export const createBattle = (attackData, playerId) => {
    const configObj = {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify({
            battle: {
                neighborhood_id: attackData.neighborhoodId,
                militia: attackData.numMilitia
            }
        })
    }
    const url = playersUrl + `/${playerId}/battles`
    return dispatch => {
        fetch(url, configObj)
    }
}