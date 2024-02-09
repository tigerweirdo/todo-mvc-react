import React from 'react';

function TodoFooter({ todos, onClearCompleted, filter, onSetFilter }) {
  const completedSize = todos.filter(todo => todo.completed).length;

  return (
    <footer className="footer" style={{ display: todos.length ? 'block' : 'none' }}>
      <span className="todo-count"><strong>{todos.length - completedSize}</strong> items left</span>
      <ul className="filters">
        {['all', 'active', 'completed'].map(f => (
          <li key={f}>
            <a
              href="#/"
              className={filter === f ? 'selected' : ''}
              onClick={() => onSetFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </a>
          </li>
        ))}
      </ul>
      <button className="clear-completed" onClick={onClearCompleted} style={{ display: completedSize ? 'block' : 'none' }}>
        Clear completed
      </button>
    </footer>
  );
}

export default TodoFooter;
