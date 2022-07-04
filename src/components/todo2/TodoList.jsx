import { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [inputs, setInputs] = useState('');
  const [todos, setTodos] = useState([]);
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
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="오늘의 할 일 "
        value={inputs}
        onChange={onChange}
        onKeyUp={handleKeyEnter}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

// < 문제점 해결 >
// - 문제: Enter key 이벤트 실행 중 한글 입력시, 마지막 한 글자가 추가로 입력되는 문제 발생
// - 해결: onKeyDown -> onKeyUp 이벤트 수정
