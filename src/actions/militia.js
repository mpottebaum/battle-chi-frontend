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
        dispatch({type: 'INCREASE_MILITIA_PLACED'})
    }
}

export const setPlaceMilitiaCount = count => {
    return dispatch => {
        dispatch({type: 'SET_PLACE_MILITIA_COUNT', placeMilitiaCount: count})
    }
}