import * as ActionTypes from '../actions'
import paginate from './paginate'
import { combineReducers } from 'redux'

// 
const user = (state = {}, action) => {
    console.log('actionがあったよ', state)
    return state
}

// 
const chats = (state = [], action) => {
    return state
}

// 
const app = (state = {}, action) => {
    return state
}

// Updates error message to notify about the failed fetches.
const errorMessage = (state = null, action) => {
    const { type, error } = action

    if (type === ActionTypes.RESET_ERROR_MESSAGE) {
        return null
    } else if (error) {
        return error
    }

    return state
}

// Updates the pagination data for different actions.
const pagination = combineReducers({
    starredByUser: paginate({
        mapActionToKey: action => action.login,
        types: [
            ActionTypes.STARRED_REQUEST,
            ActionTypes.STARRED_SUCCESS,
            ActionTypes.STARRED_FAILURE
        ]
    }),
    stargazersByRepo: paginate({
        mapActionToKey: action => action.fullName,
        types: [
            ActionTypes.STARGAZERS_REQUEST,
            ActionTypes.STARGAZERS_SUCCESS,
            ActionTypes.STARGAZERS_FAILURE
        ]
    })
})

const rootReducer = combineReducers({
    app,
    user,
    chats
})

export default rootReducer
