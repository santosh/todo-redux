const initialState = [
  { id: 1, description: "Write email", completed: false },
  { id: 2, description: "Deep work", completed: false },
  { id: 3, description: "Meeting", completed: false, color: 'purple' },
  { id: 4, description: "Write design doc", completed: false, color: 'blue' },
]

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "todo/TODO_ADDED": {
      const newTodoToAdd = {
        ...action.payload,
        id: nextTodoId(state) // Assuming nextTodoId function exists and generates the next unique ID
      };
      return [
        ...state,
        newTodoToAdd
      ]
    }
    case "todo/TODO_TOGGLED": {
      return state.map(todo => {
        if (todo.id !== action.payload) {
          return todo
        }

        return {
          ...todo,
          completed: !todo.completed
        }
      })
    }
    case "todo/COLOR_SELECTED": {
      const { color, todoId } = action.payload
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo
        }

        return {
          ...todo,
          color,
        }
      })
    }
    case "todo/TODO_DELETED": {
      // return entire state value except the one in payload
      return state.filter((todo) => todo.id !== action.payload)
    }
    case "todo/TODO_CLONED":
      // add new item by cloing the one in payload
      const clonedTodo = state.find((todo) => todo.id === action.payload);
      const newTodo = { ...clonedTodo, id: nextTodoId(state) };

      return [
        ...state,
        newTodo
      ]
    case 'todo/TODO_ALL_COMPLETED': {
      return state.map((todo) => {
        return { ...todo, completed: true }
      })
    }
    case 'todo/TODO_COMPLETED_CLEARED': {
      return state.filter((todo) => !todo.completed)
    }
    default:
      return state
  }
}

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId) - 1)
  return maxId + 1
}
