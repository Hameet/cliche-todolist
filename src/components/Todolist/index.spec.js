import React from 'react'
import { shallow } from 'enzyme'

import Todolist from '.'

describe('components:Todolist', function () {
  it('returns null when the Todolist is empty or undefined', () =>
    expect(toJson(shallow(<Todolist />))).toMatchSnapshot())

  it('renders the Todolist properly', () => {
    const todoslist = [{ todo: 'X' }, { todo: 'Y' }]
    const handleOnDelete = jest.fn()
    const button = <button onClick={handleOnDelete.bind(null)}>X</button>

    expect(
      toJson(shallow(<Todolist todos={todoslist} button={button} />))
    ).toMatchSnapshot()
  })
})

// test('should call start logout on button click', () => {
//   const mockLogout = jest.fn();
//   const wrapper = shallow(<Component startLogout={mockLogout}/>);
//   wrapper.find('button').at(0).simulate('click');
//   expect(mockLogout).toHaveBeenCalled();
// });
