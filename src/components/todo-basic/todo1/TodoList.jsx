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
          id: Date.now(),
          text: inputs,
        },
      ]);
    }
    setInputs('');
  };

  const handleKeyEnter = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="오늘의 할 일"
        value={inputs}
        onChange={onChange}
        onKeyDown={handleKeyEnter}
      />
      <button onClick={handleSubmit}>추가</button>
      <ul>
        <h2>할 일 목록</h2>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

// 1. input으로 값 받기
// 1-2. input 값 없을 때 추가 방지
// 2. enter키 이벤트로 제출하기
// 3. 리스트에 투두 값 보여주기
// 4. 투두 삭제 기능
