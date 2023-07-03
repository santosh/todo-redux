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
      // add code here
      break
    case "todo/CLONE_TODO":
      // add code here
      break
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

export default store
