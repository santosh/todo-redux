import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import TodoListItem from './TodoListItem'

const selectedTodoIds = state => state.todos.map(todo => todo.id)

const TodoList = () => {
  const todoIds = useSelector(selectedTodoIds, shallowEqual)

  const renderedListItems = todoIds.map((todoId) => {
    return <TodoListItem key={todoId} id={todoId} />
  })

  return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList

// Why did we change from passing todos to passing todoIds?
//  - We want to avoid passing the entire todo object to the TodoListItem component.
// Why do we avoid passing the entire todo object to the TodoListItem component?
//  - Passing the entire todo object to the TodoListItem component would cause the TodoListItem component to re-render whenever any property of the todo object changes.
