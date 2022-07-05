import { useState } from 'react';
import TodoItem2 from './TodoItem2';

const TodoList = () => {
  const [inputs, setInputs] = useState('');
  const [todos, setTodos] = useState([]);

  //   const ref = useRef();

  const onChange = (e) => {
    setInputs(e.target.value);
  };

  const handleSubmit = () => {
    if (inputs !== '') {
      setTodos([
        ...todos,
        {
          id: Math.floor(Math.random() * 100),
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
      <h1>오늘의 할 일</h1>
      <input
        type="text"
        value={inputs}
        onChange={onChange}
        onKeyUp={handleKeyEnter}
      />
      <button onClick={handleSubmit}>추가</button>
      <section>
        {todos.map((todo) => (
          <TodoItem2
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            setTodos={setTodos}
            todos={todos}
          />
        ))}
      </section>
    </div>
  );
};

export default TodoList;
