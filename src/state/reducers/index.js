import { slice, length } from 'ramda'

import { initialState, TODO_ADDED, DELETE_TODO } from '..'

function rootReducer (state = initialState, { payload = {}, type }) {
  switch (type) {
    case TODO_ADDED:
      return {
        ...state,
        todos: [...state.todos, payload]
      }
    default:
      return state
    case DELETE_TODO:
      return {
        ...state,
        users: [
          ...slice(0, payload.index, state.todos),
          ...slice(payload.index + 1, length(state.todos), state.todos)
        ]
      }
  }
}

export { rootReducer }
