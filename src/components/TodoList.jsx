import { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [item, setItem] = useState('');
  const [todos, setTodos] = useState([]);
  //   const local = window.localStorage;

  const onChange = (e) => {
    setItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      {
        id: new Date().getTime().toString(),
        item: item,
      },
    ]);
    setItem('');
    debugger;
    //console.log(todos); // 밀리는거 정상, useState의 맹점! (렌더링될 때 바뀜)
    // 프론트엔드 디버그 잘찍기!!!!
    // 디버거 잘쓰기! ->
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      {/* form 리액트 사용 자제, 
      form 태그는 페이지 이동을 목적으로 함 
      form 태그 파일업로드 목적으로 주 사용*/}
      <form>
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          value={item}
          onChange={onChange}
        />
        <button onClick={handleSubmit}>click</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

// setState의 맹점
/*
function test(){
    setValue('');
    if(value === 'test'){
        //to do
    }
}*/
