import React from 'react'
import { ReactComponent as TimesSolid } from './times-solid.svg'
import { availableColors, capitalize } from '../filter/colors'
import { useSelector, useDispatch } from 'react-redux'

const selectedTodoById = (state, todoId) => state.todos.find((todo) => todo.id === todoId)

const TodoListItem = ({ id }) => {
  const todo = useSelector(state => selectedTodoById(state, id))
  const { text, completed, color } = todo

  const dispatch = useDispatch()

  const handleCompletedChanged = () => {
    dispatch({ type: 'todo/TODO_TOGGLED', payload: todo.id })
  }

  const handleColorChanged = (e) => {
    dispatch({ type: 'todo/COLOR_SELECTED', payload: { todoId: todo.id, color: e.target.value } })
  }

  const handleDeleteClicked = () => {
    dispatch({ type: 'todo/TODO_DELETED', payload: todo.id })
  }

  const colorOptions = availableColors.map((c) => (
    <option key={c} value={c}>
      {capitalize(c)}
    </option>
  ))

  return (
    <li>
      <div className="view">
        <div className="segment label">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={handleCompletedChanged}
          />
          <div className="todo-text">{text}</div>
        </div>
        <div className="segment buttons">
          <select className="colorPicker" value={color} style={{ color }} onChange={handleColorChanged}>
            <option value=""></option>
            {colorOptions}
          </select>
          <button className="destroy" onClick={handleDeleteClicked}>
            <TimesSolid />
          </button>
        </div>
      </div>
    </li>
  )
}

export default TodoListItem
