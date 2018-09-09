import { getTodos } from '.'

describe('state:selectors', () => {
  describe('getTodos', () => {
    it('should return the todos', () => {
      const todos = 'fdd'
      const state = { todos }
      expect(getTodos(state)).toBe(todos)
    })
  })
})