import { TODO_ADDED, DELETE_TODO } from '..'

function todoAdded (todo) {
  return {
    type: TODO_ADDED,
    payload: {
      todo
    }
  }
}

function deleteTodo (index) {
  return {
    type: DELETE_TODO,
    payload: { index }
  }
}

export { todoAdded, deleteTodo }
