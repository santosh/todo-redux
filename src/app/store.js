import { createStore } from "redux"
import { todoReducer } from "./reducer"


const store = createStore(todoReducer)

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

// {type: 'todos/todoAdded', payload: todoText}
// {type: 'todos/todoToggled', payload: todoId}
// {type: 'todos/colorSelected', payload: {todoId, color}}
// {type: 'todos/todoDeleted', payload: todoId}
// {type: 'todos/allCompleted'}
// {type: 'todos/completedCleared'}
// {type: 'filters/statusFilterChanged', payload: filterValue}
// {type: 'filters/colorFilterChanged', payload: {color, changeType}}

export default store
