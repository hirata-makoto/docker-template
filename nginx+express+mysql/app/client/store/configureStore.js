import prod from './configureStore.prod'
import dev from './configureStore.dev'

let configureStore
if (process.env.NODE_ENV === 'production') {
    configureStore = prod
} else {
    configureStore = dev
}

export default configureStore
