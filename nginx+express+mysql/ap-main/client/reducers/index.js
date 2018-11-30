import * as ActionTypes from '../actions'
import { combineReducers } from 'redux'

// 
const user = (state = {}, action) => {
    return state
}

// 
const chats = (state = [], action) => {
    if(action.type === 'CHAT_CONNECTION'){
        console.log('接続を開始します。')
        return state
    }
    if(action.type === 'CHAT_CONNECTION_RESULT'){
        console.log('接続されました。')
        return state
    }

    if(action.type === 'CHAT_SEND_MESSAGE'){
        console.log('送信中イベントを受け付けました。')
        return state
    }
    if(action.type === 'CHAT_SEND_MESSAGE_RESULT'){
        console.log('結果イベントを受付ました。')
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
