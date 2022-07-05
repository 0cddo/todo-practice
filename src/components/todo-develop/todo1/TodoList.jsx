import { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = () => {
    const todo = { id: Date.now(), text: input, isChecked: false };

    input !== '' && setTodos(todos.concat(todo));

    setInput('');
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
        onChange={(e) => setInput(e.target.value)}
        onKeyUp={(e) => e.key === 'Enter' && handleSubmit()}
      />
      <button onClick={() => handleSubmit()}>추가</button>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            setTodos={setTodos}
            todos={todos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
