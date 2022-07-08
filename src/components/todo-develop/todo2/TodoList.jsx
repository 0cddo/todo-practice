import { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (input !== '') {
      setTodos([
        ...todos,
        {
          id: Math.floor(Math.random() * 100),
          text: input,
          isChecked: false,
        },
      ]);
    }

    setInput('');
  };

  const handleEnterKey = (e) => {
    if (e.key === 'Enter') handleSubmit();
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={onChange}
        onKeyUp={handleEnterKey}
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
