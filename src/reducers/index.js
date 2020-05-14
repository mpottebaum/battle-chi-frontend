import { combineReducers } from 'redux'
import gameReducer from './game'
import gameLoaderReducer from './gameLoader'
import currentPlayerReducer from './currentPlayer'

const rootReducer = combineReducers({
    game: gameReducer,
    gameLoader: gameLoaderReducer,
    currentPlayer: currentPlayerReducer
})

export default rootReducer