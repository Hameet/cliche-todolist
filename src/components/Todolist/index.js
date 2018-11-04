import React from 'react'
import { addIndex, map } from 'ramda'
import { isNilOrEmpty } from 'ramda-adjunct'
import styled from 'styled-components'

const indexedMap = addIndex(map)

const Button = styled.button`
  
  background: ${props => (props.primary ? 'palevioletred' : 'white')};
  color: ${props => (props.primary ? 'white' : 'palevioletred')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

const Li = styled.li`
  font-size: 2em;
  padding: 0 1em;
  align-content: center;
`

export default function Todolist ({ todos, handleOnDelete, index }) {
  console.log('index', index)
  return isNilOrEmpty(todos)
    ? null
    : <ul>
      {indexedMap(
          ({ todo }, idx) => (
            <Li key={idx} data-index={idx}>
              {todo}
              <Button onClick={handleOnDelete.bind(index, null)}>
                &nbsp;X
              </Button>
            </Li>
          ),
          todos
        )}
    </ul>
}
