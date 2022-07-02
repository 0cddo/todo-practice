// 할일 삭제
// 할일 수정
// 할일 완료 체크박스
import styled from 'styled-components';
const TodoItem = ({ todo, handleDelete }) => {
  return (
    <Item>
      <li>{todo}</li>
      <Button onClick={handleDelete}>delete</Button>
    </Item>
  );
};

const Item = styled.div`
  display: flex;
`;

const Button = styled.button`
  margin-left: 10px;
  cursor: pointer;
`;
export default TodoItem;

// <문제점>
// 1. filter 함수에 대한 이해도 부족
// 2. 응용 부족
// 3. 삭제 기능을 TodoItem에서 하려니까 안되는걸 왜몰라~~
