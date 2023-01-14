import React from 'react'
import TodoListItem from './todoslistitem.component.jsx';
import {connect} from 'react-redux';
import NewTodoForm from './newtodoform.component.jsx';
import {removeTodo, completeTodo}from './../store/actions.jsx'
import './TodoList.css'

function TodoList({todos=[], onRemovePressed, onCompletePressed}) {
  return (
    <div className="list-wrapper">
    <NewTodoForm />
        {todos.map((todo, index) => <TodoListItem key={index} todo={todo} onRemove={onRemovePressed} markCompleted={onCompletePressed} />)}
    </div>
  )
}

const mapStateToProps = (state) => ({
  todos:state.todos,
})

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: text => dispatch((removeTodo(text))),
  onCompletePressed: text => dispatch((completeTodo(text)))
})
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);