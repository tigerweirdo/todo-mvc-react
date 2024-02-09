import React, { useState } from 'react';

function TodoHeader({ onAddTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      onAddTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <header className="header">
      <h1>Görevler</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
    </header>
  );
}

export default TodoHeader;
