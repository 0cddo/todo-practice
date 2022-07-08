import { useState } from 'react';

const TodoItem = ({ todos, setTodos, todo, handleDelete }) => {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState(todo.text);
  const handleChecked = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
  };

  const handleTextEdit = (id) => {
    setEditId(id);
  };

  const handleEditSubmit = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: editText } : todo))
    );
    setEditId(null);
  };

  return (
    <div className="itemBoard">
      <input type="checkbox" onChange={() => handleChecked(todo.id)} />
      {todo.id === editId ? (
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

      {todo.id === editId ? (
        <button onClick={() => handleEditSubmit(todo.id)}>완료</button>
      ) : (
        <button onClick={() => handleTextEdit(todo.id)}>수정</button>
      )}
      <button onClick={() => handleDelete(todo.id)}>삭제</button>
    </div>
  );
};

export default TodoItem;
