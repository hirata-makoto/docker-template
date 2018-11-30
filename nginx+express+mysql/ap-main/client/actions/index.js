
/**
 * CHAT_CONNECTION
 * ↓
 * CHAT_CONNECTION_RESULT
 */
export const connection = () => (dispatch, getState) => {
    return dispatch({
        type: 'CHAT_CONNECTION',
    })
}

/**
 * CHAT_SEND_MESSAGE
 * ↓
 * CHAT_SEND_MESSAGE_RESULT
 */
export const sendMessage = (user, text) => (dispatch, getState) => {
    return dispatch({
        type: 'CHAT_SEND_MESSAGE',
        user,
        text
    })
}
