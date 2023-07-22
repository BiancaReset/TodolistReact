import React, { useState } from 'react';


const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <h2>To-Do List</h2>
      <div className="add-todo">
        <input
          type="text"
          placeholder="No tasks, add a task"
          value={newTodo}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul className="todos">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="todo-item"
            onMouseEnter={() => handleHover(index, true)}
            onMouseLeave={() => handleHover(index, false)}
          >
            <span>{todo}</span>
            <button className="delete-button" onClick={() => handleDeleteTodo(index)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoApp;

