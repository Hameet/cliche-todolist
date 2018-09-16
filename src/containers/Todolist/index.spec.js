import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import Todolist from '.'

const mockStore = configureStore()

describe('containers:Todolist', () => {
  it('should map Todolist to props', () => {
    const todos = [{todo: 'X'}, {todo: 'Y'}]
    const store = mockStore({ todos })
    const wrapper = shallow(<Todolist store={store} />)

    expect(wrapper.props()).toEqual(
      expect.objectContaining({
        todos
      })
    )
  })

})

