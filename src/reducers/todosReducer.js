export const todosReducer = (state, action) => {
  switch (action.type) {
    case "ADD__TODO":
      return [
        ...state,
        {
          id: action.todo.id,
          item: action.todo.item,
        },
      ];
    case "REMOVE__BOOK":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};
