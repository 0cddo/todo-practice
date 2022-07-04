import React from 'react';

const TodoItem = ({ todo, handleDelete }) => {
  return (
    <div style={{ display: 'flex', marginBottom: 10 }}>
      <li style={{ marginRight: 5 }}>{todo.text}</li>
      <button
        style={{ cursor: 'pointer' }}
        onClick={() => handleDelete(todo.id)}
      >
        삭제
      </button>
    </div>
  );
};

export default TodoItem;
