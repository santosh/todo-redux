import { combineReducers } from "redux";

import { todoReducer } from "./features/todo/todoSlice";
import { filterReducer } from "./features/filter/filterSlice";

export const rootReducer = combineReducers({
  todos: todoReducer,
  filters: filterReducer
})
