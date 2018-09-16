import React from 'react'
import { addIndex, map } from 'ramda'
import { isNilOrEmpty } from 'ramda-adjunct'

const indexedMap = addIndex(map)

export default function Todolist ({ todos }) {
    // console.log("hey", indexedMap)
    return isNilOrEmpty(todos)
        ? null
        : <ul>
            { indexedMap(
                ({todo}, idx) => (
                    <li key={idx} data-index={idx}>
                        {todo}
                    </li>
                    ),
                    todos
                )
            }
        </ul>
}