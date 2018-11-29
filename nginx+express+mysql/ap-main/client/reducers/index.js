import * as ActionTypes from '../actions'
import { combineReducers } from 'redux'

// 
const user = (state = {}, action) => {
    return state
}

// 
const chats = (state = [], action) => {
    if(action.type === 'SEND_MESSAGE'){
        const a = Object.assign([], state)
        a.push({
            user: '192.198.128.12',
            date: '2018/11/29',
            dialogue: action.result
        })
        return a
    }
    return state
}

// 
const app = (state = {}, action) => {
    return state
}

const rootReducer = combineReducers({
    app,
    user,
    chats
})

export default rootReducer
