import { combineReducers } from "redux";

import { todoReducer } from "./features/todo/todoSlice";
import { filterReducer } from "./features/filter/filterSlice";

export default rootReducer = combineReducers({
  todos: todoReducer(state.todos, action),
  filters: filterReducer(state.filters, action)
})
