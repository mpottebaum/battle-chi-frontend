const showZoneIdReducer = (state=null, action) => {
    switch(action.type) {
        case 'DISPLAY_ZONE':
            return action.zoneId
        case 'RESET_MAP':
            return null
        default:
            return state
        
    }
}

export default showZoneIdReducer