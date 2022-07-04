const TodoItem = ({ todo, handleDelete }) => {
  return (
    <div style={{ display: 'flex', marginBottom: 5 }}>
      <li style={{ marginRight: 5 }}>{todo.text}</li>
      <button onClick={() => handleDelete(todo.id)}>삭제</button>
    </div>
  );
};

export default TodoItem;
