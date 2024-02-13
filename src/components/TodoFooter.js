import React from 'react';

function TodoFooter({ todos, onClearCompleted }) {
  const completedSize = todos.filter(todo => todo.completed).length;

  return (
    <footer className="footer" style={{ display: todos.length ? 'block' : 'none' }}>
      <span className="todo-count"><strong>{todos.length - completedSize}</strong> öğe kaldı</span>
      <button className="clear-completed" onClick={onClearCompleted} style={{ display: completedSize ? 'block' : 'none' }}>
        Temizle
      </button>
    </footer>
  );
}

export default TodoFooter;
