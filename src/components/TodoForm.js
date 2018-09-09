import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  color: paleviolet;
  width: 200px;
  border-radius: 5px;
  border-color: red;
`;

StyledInput.defaultName = 'StyledInput'

export default function TodoForm ({handleBlur}) {
    console.log("hey", {handleBlur})
    return (
        <form>
            <div>
                <label>To do</label>
                <br/>
                <StyledInput name='todo' onBlur ={handleBlur} />
            </div>
        </form>
    )
}