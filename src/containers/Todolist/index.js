import { connect } from 'react-redux'

import  Todolist  from '../../components/Todolist'
import { getTodos } from '../../state'

function mapStateToProps (state) {
    return {
        todos: getTodos(state)
    }
}

export default connect(mapStateToProps)(Todolist)