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
      <h1 onClick={() => document.body.classList.toggle('dark-mode')}>Liste</h1>
      <input
        className="new-todo"
        autoFocus
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
    </header>
  );
}

export default TodoHeader;
