import React from 'react';

function TodoItem({ todo, onToggleTodo, onDeleteTodo }) {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleTodo(todo.id)}
        />
        <label>{todo.title}</label>
        <button className="destroy" onClick={() => onDeleteTodo(todo.id)}></button>
      </div>
    </li>
  );
}

export default TodoItem;
