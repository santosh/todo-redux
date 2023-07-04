const initialState = {
  todos: [
    { id: 1, description: "Write email", completed: false },
    { id: 2, description: "Deep work", completed: false },
    { id: 3, description: "Meeting", completed: false, color: 'purple' },
    { id: 4, description: "Write design doc", completed: false, color: 'blue' },
  ],
  filters: {
    status: 'All',
    colors: []
  }
}

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "todo/TODO_ADDED":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "todo/TODO_DELETED":
      // return entire state value except the one in payload
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "todo/TODO_CLONED":
      // add new item by cloing the one in payload
      const clonedTodo = state.todos.find((todo) => todo.id === action.payload);
      const newTodo = { ...clonedTodo, id: Date.now() };
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    default:
      return state
  }
}
