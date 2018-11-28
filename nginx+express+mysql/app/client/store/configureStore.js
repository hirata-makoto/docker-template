import * as prod from './configureStore.prod'
import * as dev from './configureStore.dev'

let configureStore
let preloadedState
if (process.env.NODE_ENV === 'production') {
    configureStore = prod.configureStore
    preloadedState = prod.preloadedState
} else {
    configureStore = dev.configureStore
    preloadedState = dev.preloadedState
}

export {configureStore, preloadedState}
