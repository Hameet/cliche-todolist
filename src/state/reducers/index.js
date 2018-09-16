import { isEmpty } from 'ramda'

import { initialState, TODO_ADDED } from '..'

function rootReducer (state = initialState, { payload = {}, type}) {
    switch (type) {
        case TODO_ADDED:
            return{
                    ...state,
                    todos: [...state.todos, payload]
                }
        default:
            return state
    }
}

export { rootReducer }

// case SQUARE_CLICKED:
//       return {
//         ...state,
//         moves: isUndefined(square) ? state.moves : [...state.moves, square]
//       }
//     default: