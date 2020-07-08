import React from 'react';
import styled from 'styled-components';

const TodoItem = ({ todo, onTodoClick, onDeleteClick }) => {
  const { complete, id, content } = todo;
  return (
    <>
      <TodoItemStyled
        complete={complete ? true : false}
        onClick={onTodoClick.bind(this, id)}
      >
        {content}
      </TodoItemStyled>
      <button onClick={onDeleteClick.bind(this, id)}>delete</button>
    </>
  );
};

const TodoItemStyled = styled.li`
  cursor: pointer;
  color: ${(props) => (props.complete ? 'grey' : 'black')};
  text-decoration: ${(props) => (props.complete ? 'line-through' : 'none')};

  button {
    margin-left: 20px;
    cursor: pointer;
  }
`;

export default TodoItem;
