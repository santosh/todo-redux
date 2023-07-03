import { createStore } from "redux"

const initialState = {
  value: [
    { id: 1, description: "Write email", completed: false },
    { id: 2, description: "Deep work", completed: false },
    { id: 3, description: "Meeting", completed: false },
    { id: 4, description: "Write design doc", completed: false },
  ]
}

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "todo/ADD_TODO":
      return {
        ...state,
        value: [...state.value, action.payload],
      };
    case "todo/DELETE_TODO":
      // return entire state value except the one in payload
      return {
        ...state,
        value: state.value.filter((todo) => todo.id !== action.payload),
      };
    case "todo/CLONE_TODO":
      // add new item by cloing the one in payload
      const clonedTodo = state.value.find((todo) => todo.id === action.payload);
      const newTodo = { ...clonedTodo, id: Date.now() };
      return {
        ...state,
        value: [...state.value, newTodo],
      };
    default:
      return state
  }
}

const store = createStore(todoReducer)

// ACTIONS

export const addTodo = (newTodo) => {
  return {
    type: "todo/ADD_TODO",
    payload: newTodo
  }
}

export const deleteTodo = (todoId) => {
  return {
    type: "todo/DELETE_TODO",
    payload: todoId,
  };
};

export const cloneTodo = (todoId) => {
  return {
    type: "todo/CLONE_TODO",
    payload: todoId,
  };
};

export default store
