import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  color: paleviolet;
  width: 400px;
  height: 30px;
  border-radius: 5px;
  border-color: red;
`

StyledInput.defaultName = 'StyledInput'

export default function TodoForm ({ handleBlur }) {
  return (
    <form>
      <div>
        <StyledInput name='todo' onBlur={handleBlur} />
      </div>
    </form>
  )
}
