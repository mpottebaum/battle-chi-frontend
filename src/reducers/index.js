import { combineReducers } from 'redux'
import gameReducer from './game'
import gameLoaderReducer from './gameLoader'
import currentPlayerReducer from './currentPlayer'
import selectedNeighborhoodsReducer from './selectedNeighborhoods'
import neighborhoodsLoaderReducer from './neighborhoodsLoader'
import neighborhoodsReducer from './neighborhoods'
import zonesReducer from './zones'
import defendingReducer from './defending'
import battleLoaderReducer from './battleLoader'
import currentBattleIdReducer from './currentBattleId'
import selectedCardsReducer from './selectedCards'
import matchNeighborhoodCardsReducer from './matchNeighborhoodCards'
import showZoneIdReducer from './showZoneId'

const rootReducer = combineReducers({
    game: gameReducer,
    gameLoader: gameLoaderReducer,
    currentPlayer: currentPlayerReducer,
    selectedNeighborhoods: selectedNeighborhoodsReducer,
    neighborhoodsLoader: neighborhoodsLoaderReducer,
    neighborhoods: neighborhoodsReducer,
    zones: zonesReducer,
    defending: defendingReducer,
    battleLoader: battleLoaderReducer,
    currentBattleId: currentBattleIdReducer,
    selectedCards: selectedCardsReducer,
    matchNeighborhoodCards: matchNeighborhoodCardsReducer,
    showZoneId: showZoneIdReducer
})

export default rootReducer