import { connect } from 'react-redux'

import Todolist from '../../components/Todolist'
import { getTodos, deleteTodo } from '../../state'

function mapStateToProps (state) {
  return {
    todos: getTodos(state)
  }
}

function mapDispatchToProps (dispatch, props) {
  return {
    handleOnDelete: index => {
      dispatch(deleteTodo(index))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todolist)
