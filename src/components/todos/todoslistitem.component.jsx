import React from "react";
import "./TodoListItem.css";
function TodoListItem({ todo, onRemove, markCompleted }) {
  console.log(todo);
  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>
      <div className="buttons-container">
        {todo.isCompleted ? (
          <button
           
            className="completed-button"
          >
            Completed
          </button>
        ) : (
          <button
            onClick={() => markCompleted(todo.text)}
            className="completed-button"
          >
            Mark As Completed
          </button>
        )}

        <button onClick={() => onRemove(todo.text)} className="remove-buttom">
          Remove
        </button>
      </div>
    </div>
  );
}

export default TodoListItem;
