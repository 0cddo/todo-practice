import { useState } from 'react';

const TodoItem2 = ({ setTodos, todos, todo, handleDelete }) => {
  const [edit, setEdit] = useState(null);
  const [editText, setEditText] = useState(todo.text);

  //   checkbox 함수
  const handleChecked = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.isChecked = !todo.isChecked;
        }
        return todo;
      })
    );
    console.log(todos);
  };

  //   수정 함수
  const handleEditSubmit = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.text = editText;
        }
        return todo;
      })
    );
    setEdit(null);
  };
  const handleEdit = (id) => {
    setEdit(id);
  };
  return (
    <div style={{ display: 'flex', marginBottom: 5 }}>
      {/* checkbox */}
      <input
        type="checkbox"
        value={editText}
        checked={todo.isChecked}
        onChange={() => handleChecked(todo.id)}
      />
      {/* {todo.isChecked && (
        <li
          style={{
            marginRight: 5,
            listStyle: 'none',
            color: 'lightgray',
            textDecoration: 'line-through',
          }}
        >
          {todo.text}
        </li>
      )} */}

      {/* 수정기능 */}
      {todo.id === edit ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <li
          style={{ marginRight: 5, listStyle: 'none' }}
          className={!todo.isChecked || 'unchecked'}
        >
          {todo.text}
        </li>
      )}
      {todo.id === edit ? (
        <button onClick={() => handleEditSubmit(todo.id)}>완료</button>
      ) : (
        <button onClick={() => handleEdit(todo.id)}>수정</button>
      )}
      <button onClick={() => handleDelete(todo.id)}>삭제</button>
    </div>
  );
};

export default TodoItem2;

// 요구사항
// 1. checkbox 누르면 완료 후 line-through
// 2. 수정버튼 누른 후 수정 가능하기
//  2-1. 수정 버튼을 눌렀을 때 input으로 변경되어야하고 버튼은 완료 버튼으로 변경,
//  2-2. 수정된 내용이 투두리스트 배열에 저장되어야함
