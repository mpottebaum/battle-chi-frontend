import { neighborhoodsUrl } from '../constants/index'

export const selectNeighborhood = name => {
    return dispatch => {
        dispatch({type: 'SELECT_NEIGHBORHOOD', neighborhoodName: name})
    }
}

export const addNeighborhoods = () => {
    return dispatch => {
        dispatch({type: 'START_ADD_NEIGHBORHOODS'})
        fetch(neighborhoodsUrl)
        .then(resp => resp.json())
        .then(data => {
            dispatch({
                type: 'ADD_NEIGHBORHOODS',
                neighborhoods: data.neighborhoods,
                zones: data.zones
            })
        })
    }
}