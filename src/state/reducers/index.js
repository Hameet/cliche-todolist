import { isEmpty } from 'ramda'

import { initialState, TODO_ADDED } from '..'

function rootReducer (state = initialState, { payload = {}, type}) {
    switch (type) {
        case TODO_ADDED:
            return isEmpty(payload)
                ? state
                : {
                    ...state,
                    todos: [...state.todos, payload]
                }
        default:
            return state
    }
}

export { rootReducer }