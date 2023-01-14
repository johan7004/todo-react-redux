import { COMPLETE_TODO, CREATE_TODO, REMOVE_TODO } from "./actions.jsx";

export const todos = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { text } = payload;
      const newTodo = {
        text,
        isCompleted: false,
      };
      return state.concat(newTodo);
    }

    case COMPLETE_TODO: {
      const { text } = payload;

      const updateTodo = state.map((item) => {
        if (item.text === text) {
          return { ...item, isCompleted: true };
        }
        return item;
      });
      return updateTodo;
    }
    case REMOVE_TODO: {
      const { text } = payload;
      return state.filter((todo) => todo.text !== text);
    }
    default:
      return state;
  }
};
