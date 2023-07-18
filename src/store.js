import { createStore } from "redux"
import { rootReducer } from "./reducer";

const store = createStore(rootReducer)

// ACTIONS

export const addTodo = (newTodo) => {
  return {
    type: "todo/TODO_ADDED",
    payload: newTodo
  }
}

export const deleteTodo = (todoId) => {
  return {
    type: "todo/TODO_DELETED",
    payload: todoId,
  };
};

export const cloneTodo = (todoId) => {
  return {
    type: "todo/TODO_CLONED",
    payload: todoId,
  };
};

export const toggleTodo = (todoId) => {
  return {
    type: "todo/TODO_TOGGLED",
    payload: todoId,
  };
};

// {type: 'todos/todoAdded', payload: todoText}
// {type: 'todos/colorSelected', payload: {todoId, color}}
// {type: 'todos/todoDeleted', payload: todoId}
// {type: 'todos/allCompleted'}
// {type: 'todos/completedCleared'}
// {type: 'filters/statusFilterChanged', payload: filterValue}
// {type: 'filters/colorFilterChanged', payload: {color, changeType}}

export default store
