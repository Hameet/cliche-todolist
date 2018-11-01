import React from 'react'
import { shallow } from 'enzyme'

import TodoForm from '.'

describe('components:TodoForm', function () {
  it('renders the TodoForm and CSS properties properly', () =>
    expect(toJson(shallow(<TodoForm>TodoForm</TodoForm>))).toMatchSnapshot())
})

// describe('containers:DestopProgressBar', () => {
//   it('should render the DesktopProgressBar correctly with no topics', () => {
//     expect(toJson(shallow(<DesktopProgressBar />))).toMatchSnapshot()
//   })

//   it('should render the DesktopProgressBar correctly with topics', () => {
//     const topics = getTopics(state)

//     expect(
//       toJson(shallow(<DesktopProgressBar topics={topics} />))
//     ).toMatchSnapshot()
//   })
// })
