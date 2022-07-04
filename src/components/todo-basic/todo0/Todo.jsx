import { useState } from 'react';

const Todo = () => {
  const [inputs, setInputs] = useState('');
  const [todos, setTodos] = useState([]);
  const onChange = (e) => {
    setInputs(e.target.value);
  };

  const handleSubmit = () => {
    setTodos([
      ...todos,
      {
        id: Math.floor(Math.random() * 100),
        text: inputs,
      },
    ]);

    setInputs('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleDelete = (id) => {
    // todo.id 와 지워주기위해 누른 id가 같은 함수를 제외한 나머지 함수를 배열에 넣고 렌더링해줌 (즉 지워줌)
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={inputs}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: 'flex',
              flex: '1 2',
              width: '40px',
              height: '20px',
              marginBottom: 10,
            }}
          >
            <p style={{ marginTop: 0, marginRight: 10 }}>{todo.text}</p>
            <button onClick={() => handleDelete(todo.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;

// 1. input창에서 투두 입력
// 1-1. click외에 enter만으로 실행되게
// 2. 입력된 투두 데이터 리스트에 보여주기
// 3. 입력된 투두 삭제하기
