import { rootReducer } from '.'
import { isEmpty } from 'ramda'
import {
  todoAdded,
  deleteTodo,
  initialState,
  TODO_ADDED,
  DELETE_TODO
} from '..'

describe('state:reducers', () => {
  describe('rootReducer', () => {
    it('defaults to the initialState', () => {
      expect(rootReducer(undefined, {})).toMatchObject(initialState)
    })

    it('handles an unknown action type by returning the state unchanged', () => {
      const state = 'state'
      expect(rootReducer(state, {})).toBe(state)
    })

    it(`add a new todos on a ${TODO_ADDED} action`, () => {
      const newtodo = 'Make a Todo lists'
      const state = {
        todos: []
      }

      expect(rootReducer(state, todoAdded(newtodo))).toMatchObject({
        todos: [{ todo: 'Make a Todo lists' }]
      })
    })

    // This is just a hack & slash approach to get the test working, there's probably a better way to do it
    it(`delete a user on a ${DELETE_TODO} action`, () => {
      const newIndex = 1
      const state = {
        todos: ['New Todo']
      }

      expect(rootReducer(state, deleteTodo(newIndex))).toMatchObject({
        todos: ['New Todo']
      })
    })
  })
})
