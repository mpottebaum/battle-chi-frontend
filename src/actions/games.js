import { gamesUrl, HEADERS } from '../constants/index'

export const createGame = () => {
    const configObj = {
        method: 'POST',
        headers: HEADERS
    }
    return dispatch => {
        dispatch({type: 'START_CREATE_GAME'})
        fetch(gamesUrl, configObj)
        .then(resp => resp.json())
        .then(game => {
            dispatch({type: 'CREATE_GAME', game: game})
        })
    }
}

export const joinGame = id => {
    const url = gamesUrl + `/${id}`
    return dispatch => {
        dispatch({type: 'START_JOIN_GAME'})
        fetch(url)
        .then(resp => resp.json())
        .then(game => {
            dispatch({type: 'JOIN_GAME', game: game})
        })
    }
}

export const updateGame = (game, currentPlayer) => {
    return dispatch => {
        dispatch({type: 'UPDATE_GAME', game: game})
        if(game.turn_stage === 1) {
            dispatch({type: 'RESET_MILITIA_PLACED'})
        }
        const startedBattle = game.battles.find(battle => battle.defense_militia === null)
        if(startedBattle) {
            dispatch({type: 'START_BATTLE', battleId: startedBattle.id})
        } else if(game.battles.some(battle => battle.active === true)) {
            dispatch({type: 'END_DEFENSE'})
        } else {
            dispatch({type: 'END_BATTLE'})
        }
    }
}

export const endAttack = id => {
    const configObj = {
        method: 'PATCH',
        headers: HEADERS
    }
    const url = gamesUrl + `/${id}/fortify`
    return dispatch => {
        fetch(url, configObj)
    }
}