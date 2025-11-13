const initialState = {
  todos: [
    { id: 1, text: "Вивчити useReducer", completed: true },
    { id: 2, text: "Написати редьюсер", completed: false },
  ],
};

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload.text,
            completed: false,
          },
        ],
      };

    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id != action.payload.id),
      };

    default:
      return state;
  }
}

export { initialState, todoReducer };
