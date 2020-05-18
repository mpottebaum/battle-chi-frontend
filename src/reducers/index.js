import { combineReducers } from 'redux'
import gameReducer from './game'
import gameLoaderReducer from './gameLoader'
import currentPlayerReducer from './currentPlayer'
import selectedNeighborhoodsReducer from './selectedNeighborhoods'
import neighborhoodsLoaderReducer from './neighborhoodsLoader'
import neighborhoodsReducer from './neighborhoods'
import zonesReducer from './zones'
import placeMilitiaCountReducer from './placeMilitiaCount'
import militiaPlacedReducer from './militiaPlaced'
import battlingReducer from './battling'
import battleLoaderReducer from './battleLoader'

const rootReducer = combineReducers({
    game: gameReducer,
    gameLoader: gameLoaderReducer,
    currentPlayer: currentPlayerReducer,
    selectedNeighborhoods: selectedNeighborhoodsReducer,
    neighborhoodsLoader: neighborhoodsLoaderReducer,
    neighborhoods: neighborhoodsReducer,
    zones: zonesReducer,
    placeMilitiaCount: placeMilitiaCountReducer,
    militiaPlaced: militiaPlacedReducer,
    battling: battlingReducer,
    battleLoader: battleLoaderReducer
})

export default rootReducer