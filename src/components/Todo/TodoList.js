import React from 'react';
import styled from 'styled-components';
// Redux Stuff
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleTodoAction,
  deleteTodoAction,
} from '../../redux/actions/actions';
// Components
import TodoItem from './TodoItem';

const TodoList = () => {
  const dispatch = useDispatch();
  const toggleTodo = (id) => dispatch(toggleTodoAction(id));
  const deleteTodo = (id) => dispatch(deleteTodoAction(id));

  const todos = useSelector((state) => state.todos);
  return (
    <>
      <TodoListStyled>
        {todos?.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onTodoClick={toggleTodo}
            onDeleteClick={deleteTodo}
          />
        ))}
      </TodoListStyled>
      {todos.length === 0 ? <p>No todos, today</p> : null}
    </>
  );
};

const TodoListStyled = styled.ul`
  list-style: none;
`;

export default TodoList;
