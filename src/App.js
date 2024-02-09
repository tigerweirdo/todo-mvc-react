import React, { useState } from 'react';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';
import './App.css'; // CSS stillerini buraya ekleyin

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all'); // Filtre durumu eklendi


  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };
  const getFilteredTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  };
  return (
    <section className="todoapp">
      <TodoHeader onAddTodo={addTodo} />
      <TodoList todos={getFilteredTodos()} onToggleTodo={toggleTodo} onDeleteTodo={deleteTodo} />
      {todos.length > 0 && <TodoFooter todos={todos} onClearCompleted={clearCompleted} filter={filter} onSetFilter={setFilter} />} 
    </section>
  );
}

export default App;
