import React, { useState } from 'react'

function Todo() {
  const [tasks, setTasks] = useState([
    { id: 1, description: "Write email", completed: false },
    { id: 2, description: "Deep work", completed: false },
    { id: 3, description: "Meeting", completed: false },
    { id: 4, description: "Write design doc", completed: false },
  ])

  const [newTask, setNewTask] = useState("")

  const addTask = () => {
    if (newTask.trim() === "") {
      return
    }

    const newTaskItem = {
      id: Date.now(),
      description: newTask,
      completed: false
    }

    setTasks([...tasks, newTaskItem])
    setNewTask("")
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
      <button onClick={addTask}>Add Task</button>
      <h2>My Todos:</h2>
      <ul className="todo-list">{
        tasks.map((task) => (
          <li key={task.id}>
            <span>{task.description}</span>
            <div class="button-container">
              <button>Delete</button>
              <button>Clone</button>
            </div>
          </li>
        ))
      }
      </ul>
    </div>
  )
}

export default Todo
