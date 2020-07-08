import { v4 as uuidv4 } from 'uuid';
const { ADD_TODO, TOGGLE_TODO, DELETE_TODO } = require('../types');

const initialState = {
  todos: [
    {
      id: uuidv4(),
      content: 'Read a bit',
      complete: true,
    },
    {
      id: uuidv4(),
      content: 'Do laundry',
      complete: false,
    },
  ],
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TODO:
      if (payload) {
        return {
          ...state,
          todos: [
            ...state.todos,
            { id: uuidv4(), complete: false, content: payload },
          ],
        };
      }
    case TOGGLE_TODO: {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload
            ? { ...todo, complete: !todo.complete }
            : todo
        ),
      };
    }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    default:
      return state;
  }
}
