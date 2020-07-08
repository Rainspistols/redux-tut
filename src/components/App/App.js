import React from 'react';
// Components
import AddTodo from '../AddTodo';
import Filters from '../Filters';
import TodoList from '../Todo/TodoList';
// Redux Stuff
import { Provider } from 'react-redux';
import store from '../../redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Filters />
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
