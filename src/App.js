import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTask = () => {
    // Check if task input is not empty (required field)
    if (task.trim() === '') {
      alert('Task input is required!');
      return;
    }

    // Create new todo object
    const newTodo = {
      id: Date.now(), // Simple unique ID
      task: task,
      description: description
    };

    // Add new todo to the list
    setTodos([...todos, newTodo]);

    // Clear input fields
    setTask('');
    setDescription('');
  };

  const handleDeleteTask = (id) => {
    // Filter out the todo with the matching id
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Allow adding task with Enter key on task input
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo</h1>

        <div className="input-section">
          <h2>New task:</h2>
          
          <input
            type="text"
            placeholder="Your task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyPress={handleKeyPress}
            className="task-input"
          />

          <textarea
            placeholder="Describe it"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="description-input"
          />

          <button onClick={handleAddTask} className="add-btn">
            Add
          </button>
        </div>

        <div className="todo-list-section">
          <h2>My todo list:</h2>
          {todos.length === 0 ? (
            <p className="empty-message">No tasks yet. Add your first task above!</p>
          ) : (
            <ul className="todo-list">
              {todos.map((todo) => (
                <li key={todo.id} className="todo-item">
                  <div className="todo-content">
                    <strong>{todo.task}</strong>
                    {todo.description && `: ${todo.description}`}
                  </div>
                  <button 
                    onClick={() => handleDeleteTask(todo.id)} 
                    className="done-btn"
                  >
                    Done
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
