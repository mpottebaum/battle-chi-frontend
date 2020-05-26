import { gamesUrl, HEADERS } from '../constants/index'

export const createGame = setup => {
    const body = (setup === 'random' ? {random: true} : {random: false})
    const configObj = {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify(body)
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
            const startedBattle = data.game.battles.find(battle => battle.defense_militia === null)
            if(startedBattle) {
                dispatch({type: 'START_BATTLE', battleId: startedBattle.id})
            } else if(data.game.battles.some(battle => battle.active === true)) {
                const activeBattle = data.game.battles.find(battle => battle.active === true)
                dispatch({type: 'START_BATTLE', battleId: activeBattle.id})
                dispatch({type: 'END_DEFENSE'})
            }
        })
    }
}

export const updateGame = game => {
    return dispatch => {
        dispatch({type: 'UPDATE_GAME', game: game})
        if(game.battles) {
            const startedBattle = game.battles.find(battle => battle.defense_militia === null)
            if(startedBattle) {
                dispatch({type: 'START_BATTLE', battleId: startedBattle.id})
            } else if(game.battles.some(battle => battle.active === true)) {
                const activeBattle = game.battles.find(battle => battle.active === true)
                dispatch({type: 'START_BATTLE', battleId: activeBattle.id})
                dispatch({type: 'END_DEFENSE'})
            } else {
                dispatch({type: 'END_BATTLE'})
            }
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

export const endTurn = id => {
    const configObj = {
        method: 'PATCH',
        headers: HEADERS
    }
    const url = gamesUrl + `/${id}/cycle`
    return dispatch => {
        fetch(url, configObj)
    }
}