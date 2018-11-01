import { slice, length } from 'ramda'

import { initialState, TODO_ADDED, DELETE_TODO } from '..'

function rootReducer (state = initialState, { payload = {}, type }) {
  switch (type) {
    case TODO_ADDED:
      return {
        ...state,
        todos: [...state.todos, payload]
      }

    case DELETE_TODO:
      return {
        ...state,
        todos: [
          ...slice(0, payload.index, state.todos),
          ...slice(payload.index + 1, length(state.todos), state.todos)
        ]
      }
    default:
      return state
  }
}

export { rootReducer }
