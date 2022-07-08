import { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [inputs, setInputs] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = () => {
    if (inputs !== '') {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: inputs,
          isChecked: false,
        },
      ]);
    }
    setInputs('');
  };

  const handleKeyEnter = (e) => {
    if (e.key === 'Enter') handleSubmit();
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Hello Todo World!</h1>
      <input
        type="text"
        value={inputs}
        onChange={(e) => setInputs(e.target.value)}
        onKeyUp={handleKeyEnter}
      />
      <button onClick={handleSubmit}>추가</button>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
