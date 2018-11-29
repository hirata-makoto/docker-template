import { normalize, schema } from 'normalizr'
import { camelizeKeys } from 'humps'

export const api = store => next => async action => {

    const a = await asyncFunc()
    action.result = a
    next(action)
}

function asyncFunc (){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('bbbbbbbbbbbbbbbbbbb')
        }, 1000)
    })
}
