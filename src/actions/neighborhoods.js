export const selectNeighborhood = name => {
    return dispatch => {
        dispatch({type: 'SELECT_NEIGHBORHOOD', neighborhoodName: name})
    }
}