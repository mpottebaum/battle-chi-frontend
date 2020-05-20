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