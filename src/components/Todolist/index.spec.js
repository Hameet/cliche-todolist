import React from 'react'
import { shallow } from 'enzyme'

import Todolist from '.'

describe('components:Todolist', function () {
  it('returns null when the Todolist is empty or undefined', () =>
    expect(toJson(shallow(<Todolist/>))
  ).toMatchSnapshot())

  it('renders the Todolist properly', () => {
    const todoslist = [{todo: 'X'}, {todo: 'Y'}]
  
    expect(toJson(shallow(<Todolist todos={todoslist} />))
  ).toMatchSnapshot()})
})

