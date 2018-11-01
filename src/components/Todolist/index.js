import React from 'react'
import { addIndex, map } from 'ramda'
import { isNilOrEmpty } from 'ramda-adjunct'

const indexedMap = addIndex(map)

export default function Todolist ({ todos, handleOnDelete, index }) {
  // console.log("hey", indexedMap)
  return isNilOrEmpty(todos)
    ? null
    : <ul>
      {indexedMap(
          ({ todo }, idx) => (
            <li key={idx} data-index={idx}>
              {todo}
              <button onClick={handleOnDelete.bind(index, null)}>
                &nbsp;X
              </button>
            </li>
          ),
          todos
        )}
    </ul>
}
