import { useState, useRef } from 'react';

const TodoItem = ({ todos, todo, handleDelete }) => {
  const [checked, setChecked] = useState(false);
  const [editToggle, setEditToggle] = useState(false);
  const [editInput, setEditInput] = useState(todo.text);
  const [editTodoList, setEditTodoList] = useState([...todos]);

  //   const inputRef = useRef(null);

  const handleChecked = () => {
    setChecked(!checked);
  };

  const handleEditBtn = () => {
    setEditToggle(!editToggle);
  };

  const handleEditTodo = (e) => {
    setEditInput(e.target.value);
  };

  const handleEditSubmit = (id) => {
    setEditTodoList(todo.id === id && { id: id, text: editInput });
    console.log(editTodoList);
    setEditToggle(!editToggle);
    const textChange = () => {};
  };

  return (
    <div style={{ display: 'flex', margin: '10px 0' }}>
      <input type="checkbox" onChange={handleChecked} />
      {/* {checked ? (
        <label
          style={{
            marginRight: 5,
            textDecoration: 'line-through',
            color: 'lightgray',
          }}
        >
          {todo.text}
        </label>
      ) : (
        <label style={{ marginRight: 5 }}>{todo.text}</label>
      )} */}
      {/* 수정 */}
      {editToggle ? (
        <input
          type="text"
          value={editInput}
          onChange={handleEditTodo}
          // ref={inputRef}
        />
      ) : (
        <label>{todo.text}</label>
      )}
      {editToggle ? (
        <button
          onClick={() => handleEditSubmit(todo.id)}
          editToggle={!editToggle}
        >
          완료
        </button>
      ) : (
        <button onClick={() => handleEditBtn(todo.id)}>수정</button>
      )}
      <button onClick={() => handleDelete(todo.id)}>삭제</button>
    </div>
  );
};

export default TodoItem;

// 요구사항
// 1. checkbox 누르면 완료 후 line-through
// 2. 수정버튼 누른 후 수정 가능하기
//  2-1. 수정 버튼을 눌렀을 때 input으로 변경되어야하고 버튼은 완료 버튼으로 변경,
//  2-2. 수정된 내용이 투두리스트 배열에 저장되어야함
