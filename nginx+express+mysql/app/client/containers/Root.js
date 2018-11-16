import prod from './Root.prod'
import dev from './Root.dev'

let Root
if (process.env.NODE_ENV === 'production') {
    Root = prod
} else {
    Root = dev
}

export default Root
