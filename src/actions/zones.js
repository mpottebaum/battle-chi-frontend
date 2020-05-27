export const displayZone = id => {
    return dispatch => {
        dispatch({type: 'DISPLAY_ZONE', zoneId: id})
    }
}

export const resetMap = () => {
    return dispatch => {
        dispatch({type: 'RESET_MAP'})
    }
}