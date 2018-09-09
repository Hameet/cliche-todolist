import { todoAdded } from '.'
import {
  TODO_ADDED
} from '../'

describe('state:actions', () => {
  describe('todoAdded', () => {
    it(`creates a ${TODO_ADDED} action`, () => {
      const todo = 'dfd'
      expect(todoAdded(todo)).toMatchObject({
        type: TODO_ADDED,
        payload: {
          todo
        }
      })
    })
  })
})