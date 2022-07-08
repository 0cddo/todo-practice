import { useState } from 'react';

const TodoItem = ({ todos, setTodos, todo, handleDelete }) => {
  const [edit, setEdit] = useState(null);
  const [editText, setEditText] = useState(todo.text);

  const handleChecked = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
  };

  const handleEditText = (id) => {
    setEdit(id);
  };

  const handleEditSubmit = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: editText } : todo))
    );
    setEdit(null);
  };

  return (
    <div className="itemBoard">
      <input type="checkbox" onChange={() => handleChecked(todo.id)} />
      {todo.id === edit ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <li className={todo.isChecked ? 'checked' : 'unchecked'}>
          {todo.text}
        </li>
      )}
      {todo.id === edit ? (
        <button onClick={() => handleEditSubmit(todo.id)}>완료</button>
      ) : (
        <button onClick={() => handleEditText(todo.id)}>수정</button>
      )}
      <button onClick={() => handleDelete(todo.id)}>삭제</button>
    </div>
  );
};

export default TodoItem;
