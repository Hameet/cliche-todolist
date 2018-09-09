import { rootReducer } from '.'
import {
    todoAdded,
    getTodos,
    initialState,
    TODO_ADDED
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
        todos: [ ]}

      expect(
        rootReducer(state, todoAdded(newtodo))
      ).toMatchObject({
      todos: [{todo:'Make a Todo lists'}]
      })
    })
  })
})

