import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import {chats} from '../middleware/chats'
import rootReducer from '../reducers'
import { devToolsEnhancer } from 'redux-devtools-extension'

export const configureStore = preloadedState => {
    const store = createStore(
        rootReducer,
        preloadedState,
        compose(
            applyMiddleware(
                thunk,
                chats,
                createLogger()
            ),
            devToolsEnhancer()
        ),
    )

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            store.replaceReducer(rootReducer)
        })
    }

    return store
}

export const preloadedState = {
    app: {
        title: 'チャットテスト'
    },
    user: {
        name: '168.190.0.100'
    },
    chats: [
        {
            user: '168.190.0.100',
            date: '2018/11/28',
            dialogue: 'aaaaaaaaaaaaaaaaaaaaaaaaaaa'
        }]
}
