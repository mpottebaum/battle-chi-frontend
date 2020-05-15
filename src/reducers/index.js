import { combineReducers } from 'redux'
import gameReducer from './game'
import gameLoaderReducer from './gameLoader'
import currentPlayerReducer from './currentPlayer'
import selectedNeighborhoodsReducer from './selectedNeighborhoods'

const rootReducer = combineReducers({
    game: gameReducer,
    gameLoader: gameLoaderReducer,
    currentPlayer: currentPlayerReducer,
    selectedNeighborhoods: selectedNeighborhoodsReducer
})

export default rootReducer