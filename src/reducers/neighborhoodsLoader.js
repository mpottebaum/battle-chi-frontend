const neighborhoodsLoaderReducer = (state=true, action) => {
    switch(action.type) {
        case 'START_ADD_NEIGHBORHOODS':
            return true
        case 'ADD_NEIGHBORHOODS':
            return false
        default:
            return state
    }
}

export default neighborhoodsLoaderReducer