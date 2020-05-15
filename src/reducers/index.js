import { combineReducers } from 'redux'
import gameReducer from './game'
import gameLoaderReducer from './gameLoader'
import currentPlayerReducer from './currentPlayer'
import selectedNeighborhoodsReducer from './selectedNeighborhoods'
import neighborhoodsLoaderReducer from './neighborhoodsLoader'
import neighborhoodsReducer from './neighborhoods'
import zonesReducer from './zones'

const rootReducer = combineReducers({
    game: gameReducer,
    gameLoader: gameLoaderReducer,
    currentPlayer: currentPlayerReducer,
    selectedNeighborhoods: selectedNeighborhoodsReducer,
    neighborhoodsLoader: neighborhoodsLoaderReducer,
    neighborhoods: neighborhoodsReducer,
    zones: zonesReducer
})

export default rootReducer