import React, {useEffect} from 'react'
import TodoListItem from './todoslistitem.component.jsx';
import {connect} from 'react-redux';
import NewTodoForm from './newtodoform.component.jsx';
import { loadTodos, removeTodoRequest, markTodoAsCompletedRequest } from './../store/thunks.js';
import './TodoList.css'

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos }) => {
  useEffect(() => {
      startLoadingTodos();
  }, []);
  
  const loadingMessage = <div>Loading todos...</div>;
  const content = (
      <div className="list-wrapper">
          <NewTodoForm />
          {todos.map(todo => <TodoListItem
            key={todo.id}
              todo={todo}
              onRemovePressed={onRemovePressed}
              onCompletedPressed={onCompletedPressed}/>)}
      </div>
  );
  return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: id => dispatch(removeTodoRequest(id)),
  onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);