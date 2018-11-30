import { normalize, schema } from 'normalizr'
import { camelizeKeys } from 'humps'
import io from 'socket.io-client'

export const chats = store => next => async action => {

    connection()
    // // SEND_MESSAGEをreducerに通知
    // next(action)

    // // サーバーへの送信処理
    // const a = await sendMessage()
    // const user = action.user
    // const text = action.text

    // // SEND_MESSAGE_RESULTをreducerに通知
    // return next({
    //     type: 'CHAT_SEND_MESSAGE_RESULT',
    //     user,
    //     text,
    //     result: a
    // })
}

function sendMessage (){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('bbbbbbbbbbbbbbbbbbb')
        }, 1000)
    })
}

// export const connection = store => next => async action => {
//     // CHAT_CONNECTIONをreducerに通知
//     next(action)

//     // CHAT_CONNECTION_RESULTをreducerに通知
//     return next({
//         type: 'CHAT_CONNECTION_RESULT',
//         socket
//     })
// }

function connection(next){
    const socket = io.connect('ws://localhost:3001')
    socket.on('connection', (a) => {
        console.log('connection', a)
        return next({
            type: 'CHAT_CONNECTION_RESULT'
        })
    })
}
