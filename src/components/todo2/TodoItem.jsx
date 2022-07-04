const TodoItem = ({ todo, handleDelete }) => {
  return (
    <div style={{ display: 'flex', marginBottom: 5 }}>
      <li style={{ marginRight: 5 }}>{todo.text}</li>
      <button onClick={() => handleDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
