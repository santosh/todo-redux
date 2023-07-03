import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addTodo, deleteTodo, cloneTodo } from '../app/store'

function Todo() {
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.value)

  const [newTask, setNewTask] = useState("")

  const handleAddTask = () => {
    if (newTask.trim() === "") {
      return
    }

    const newTaskItem = {
      id: Date.now(),
      description: newTask,
      completed: false
    }

    // setTasks([...tasks, newTaskItem])
    dispatch(addTodo(newTaskItem))
    setNewTask("")
  }

  const handleDelete = (taskId) => {
    dispatch(deleteTodo(taskId))
  }

  const handleClone = (taskId) => {
    dispatch(cloneTodo(taskId))
  }

  const handleInputChange = (e) => {
    setNewTask(e.target.value)
  }

  return (
    <div>
      <input
        id="newTask"
        type="text"
        value={newTask}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <h2>My Todos:</h2>
      <ul className="todo-list">{
        tasks.map((task) => (
          <li key={task.id}>
            <span>{task.description}</span>
            <div class="button-container">
              <button onClick={() => handleDelete(task.id)}>Delete</button>
              <button onClick={() => handleClone(task.id)}>Clone</button>
            </div>
          </li>
        ))
      }
      </ul>
    </div>
  )
}

export default Todo
