import React from 'react'
import { shallow } from 'enzyme'

import App from '.'

describe('components:App', () => {
  it('renders the App with its Css properties', () => {
    expect(toJson(shallow(<App />))).toMatchSnapshot()
  })
})

