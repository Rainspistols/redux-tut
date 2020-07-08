import React, { useState } from 'react';
// Redux Stuff
import { addTodoAction } from '../redux/actions/actions';
import { useDispatch } from 'react-redux';

const AddTodo = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const addTodo = (inputValue) => dispatch(addTodoAction(inputValue));

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    addTodo(inputValue);
    setInputValue('');
  };

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='form-div'>
        <input
          type='text'
          onChange={onInputChange}
          value={inputValue}
          name='todo'
          placeholder='Add a todo'
        />
        <button type='submit'>Add Todo</button>
      </div>
    </form>
  );
};

export default AddTodo;
