import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import Todolist from '.'
import { DELETE_TODO } from '../../state'

const mockStore = configureStore()

describe('containers:Todolist', () => {
  it('should map Todolist to props', () => {
    const todos = [{ todo: 'X' }, { todo: 'Y' }]
    const store = mockStore({ todos })
    const wrapper = shallow(<Todolist store={store} />)

    expect(wrapper.props()).toEqual(
      expect.objectContaining({
        todos
      })
    )
  })

  it(`maps a handleOnDelete to dispatch ${DELETE_TODO} action`, () => {
    const state = {
      todos: ['New Todo']
    }
    const index = 0
    const store = mockStore(state)
    store.dispatch = jest.fn()
    const wrapper = shallow(<Todolist store={store} index={index} />)

    wrapper.props().handleOnDelete(index)

    expect(store.dispatch).toHaveBeenCalledWith({
      type: DELETE_TODO,
      payload: { index }
    })
  })
})
