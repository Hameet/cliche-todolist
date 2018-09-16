import React from 'react'
import { shallow } from 'enzyme'

import TodoForm from '.'


describe('components:TodoForm', function () {
  it('renders the TodoForm and CSS properties properly', () =>
    expect(toJson(shallow(<TodoForm>TodoForm</TodoForm>))
    ).toMatchSnapshot())
})


