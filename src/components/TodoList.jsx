import { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [item, setItem] = useState('');
  const [todos, setTodos] = useState([]);

  //   const itemInput = useRef();

  const onChange = (e) => {
    setItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, item]);
    setItem('');
  };

  const handleDelete = (id) => {
    todos.find();
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //   const onEnter = (e) => {
  //     if (e.key === 'Enter') {
  //       handleSubmit();
  //     }
  //   };

  return (
    <div>
      <h1>Todo List</h1>
      <form>
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          value={item}
          onChange={onChange}
          //   onKeyDown={onEnter}
          //   ref={itemInput}
        />
        <button onClick={handleSubmit}>click</button>
      </form>
      <ul>
        {todos.map((todo, i) => (
          <TodoItem key={i} todo={todo} handleDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

// enter event 는 onKeyDown 사용

//  <문제점>
// 1. 컴포넌트에 대한 개념이 명확하지 않았던 것 같다
// 2. 뭔가 여기저기서 주어들은 것들이있는데 정리가 안된 느낌
// 3. onKeyDown 이벤트 쓰려고 하다가 시간 너무 많이 낭비
// 3-1. 근데 onKeyDown 안했는데 Enter 쳐도 입력되는건 무슨 일?

// <해야할일>
// 1. 리액트 이벤트 정리(자스)
// 2. 순서도 정리하기
// 3. useRef 공식문서 읽고 정리

// <배운점>
// 1. 정리가 필요하다
// 2. 정리는 간단하게 블로그에 하자
// 3. setTodos([여기에 배열 넣어줘야했다니,,!!!!])
// 3-1. setTodos(...todos, todos.push(item)) 계속 이렇게 하고 있었음,,,,
