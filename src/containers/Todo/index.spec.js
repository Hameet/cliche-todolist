import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import Todo from '.'
import { todoAdded, TODO_ADDED, initialState } from '../../state'

const mockStore = configureStore()

describe('containers:Todo', () => {
    it('should map Todo to props', () => {
    const todo = {todo: 'X'}
    const store = mockStore({})
    const wrapper = shallow(<Todo store={store} todo={todo} />)

    expect(wrapper.props()).toMatchObject(
      expect.objectContaining({
        handleBlur: expect.any(Function),
        todo
      }))
  })

  it(`maps handleBlur to dispatch ${TODO_ADDED} action`, () => {
    const todo = {todo: 'X'}
    const store = mockStore(initialState)
  
    store.dispatch = jest.fn()
  
    const wrapper = shallow(<Todo store={store} todo={todo} />)
  
    wrapper
      .props()
      .handleBlur({ currentTarget: { value: todo.todo }})
  
    expect(store.dispatch).toHaveBeenCalledWith({
      type: TODO_ADDED,
      payload: {
        todo: 'X'
      }})
    })
})

