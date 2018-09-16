import React, { Component } from 'react';
import logo from '../../logo.svg';
import styled from 'styled-components'
import '../../App.css';

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
StyledApp.defaultName = 'StyledApp'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <StyledApp>
          <div className = "body">
          <Todo/>
          <Todolist />
          </div>
      
        </StyledApp>
      </div>
    );
  }
}

export default App;


