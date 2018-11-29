export const SEND_MESSAGE = 'SEND_MESSAGE'
export const sendMessage = (user, text) => (dispatch, getState) => {
    return dispatch({
        type: SEND_MESSAGE,
        user,
        text,
        result: ''
    })
}

// export const SEND_MESSAGE = 'SEND_MESSAGE_RESULT'
// export const sendMessage = (user, text) => (dispatch, getState) => {
//     return dispatch({
//         type: SEND_MESSAGE,
//         user,
//         text
//     })
// }


export const SERVICE_GET_DATA = 'SERVICE_GET_DATA'
export const SERVICE_SUCCESS = 'SERVICE_SUCCESS'

export function serviceGetData(title, message) {
    return {
        type: SERVICE_GET_DATA,
        api: 'http://example.com',
        success: serviceSuccess
    }
}

export function serviceSuccess(data) {
    return {
        type: SERVICE_SUCCESS,
        data: data
    }
}
