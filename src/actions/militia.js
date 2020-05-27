import { playersUrl, HEADERS } from '../constants/index'

export const placeMilitia = (playerId, neighborhoodId, endStage) => {
    return dispatch => {
        const configObj = {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify({
                neighborhood_id: neighborhoodId,
                end_stage: endStage
            })
        }
        const url = playersUrl + `/${playerId}/militia`
        fetch(url, configObj)
    }
}

export const cardPlaceMilitia = (playerId, neighborhoodId) => {
    return dispatch => {
        dispatch({type: 'CLEAR_MATCH_NEIGHBORHOOD_CARDS'})
        const configObj = {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify({
                neighborhood_id: neighborhoodId,
            })
        }
        const url = playersUrl + `/${playerId}/militia/card`
        fetch(url, configObj)
    }
}