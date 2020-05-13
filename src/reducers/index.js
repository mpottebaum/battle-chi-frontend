import { combineReducers } from 'redux'
import gamesReducer from './games'
import gameLoaderReducer from './gameLoader'

const rootReducer = combineReducers({
    game: gamesReducer,
    gameLoader: gameLoaderReducer
})

export default rootReducer