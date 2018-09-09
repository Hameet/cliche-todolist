import { TODO_ADDED } from '..'

function todoAdded (todo) {
    return {
        type: TODO_ADDED,
        payload: {
            todo
        }
    }
}

export { todoAdded }