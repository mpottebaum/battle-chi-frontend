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
            localStorage.setItem('gameId', game.id)
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
            localStorage.setItem('gameId', game.id)
        })
    }
}

export const addGame = (gameId, playerId) => {
    const url = gamesUrl + `/${gameId}`
    return dispatch => {
        dispatch({type: 'START_ADD_GAME'})
        fetch(url)
        .then(resp => resp.json())
        .then(game => {
            dispatch({type: 'ADD_GAME', game: game})
            const player = game.players.find(player => player.id === parseInt(playerId))
            dispatch({type: 'ADD_PLAYER', player: player})
        })
    }
}

export const addGameAndNeighborhoods = (gameId, playerId) => {
    const url = gamesUrl + `/${gameId}/retrieve`
    return dispatch => {
        dispatch({type: 'START_ADD_GAME'})
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            dispatch({type: 'ADD_GAME', game: data.game})
            const player = data.game.players.find(player => player.id === parseInt(playerId))
            dispatch({type: 'ADD_PLAYER', player: player})
            dispatch({
                type: 'ADD_NEIGHBORHOODS',
                neighborhoods: data.neighborhoods,
                zones: data.zones
            })
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