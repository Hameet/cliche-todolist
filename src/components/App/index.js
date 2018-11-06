import React, { Component } from 'react'

import styled from 'styled-components'
import '../../App.css'

import { Todo } from '../../containers'
import { Todolist } from '../../containers'

const StyledApp = styled.div`
  display: grid;
  font-family: 'Verdana', sans-serif;
  grid-template-areas: 'board';
  height: 100vh;
  margin: 0;
  padding: 0;
  width: 100vw;
`
const H1 = styled.h1`
font-size: 80px;
color: red;
margin-top: 50px;
`
class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <H1 className='App-title'>To do or Not To do</H1>
        </header>
        <StyledApp>
          <div className='body'>
            <Todo />
            <Todolist />
          </div>

        </StyledApp>
      </div>
    )
  }
}

export default App
