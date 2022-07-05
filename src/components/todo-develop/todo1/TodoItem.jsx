import { useState } from 'react';

const TodoItem = ({ setTodos, todos, todo, handleDelete }) => {
  const [edit, setEdit] = useState(null);
  const [editText, setEditText] = useState(todo.text);

  const handleChecked = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
  };

  const handleEdit = (id) => {
    setEdit(id);
  };

  const handleEditSubmit = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.text = editText;
        }
        return todo;
      })
    );

    console.log(todo);
    console.log(edit);
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
        <li className={todo.isChecked ? 'unchecked' : 'checked'}>
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

export default TodoItem;
