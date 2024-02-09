import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onToggleTodo, onDeleteTodo }) {
  return (
    <section className="main">
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleTodo={onToggleTodo}
            onDeleteTodo={onDeleteTodo}
          />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
