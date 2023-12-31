import { client } from '../../api/client'

const initialState = []

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "todo/TODO_ADDED": {
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
        },
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
    case 'todo/TODO_LOADED': {
      return action.payload
    }
    default:
      return state
  }
}

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), 0)
  return maxId + 1
}

// fetchTodos is a thunk function
export const fetchTodos = () => async (dispatch, getState) => {
  const response = await client.get('/fakeApi/todos')

  const stateBefore = getState()
  console.log('State before dispatch: ', stateBefore.todos.length)
  dispatch({ type: 'todo/TODO_LOADED', payload: response.todos })

  const stateAfter = getState()
  console.log('State after dispatch: ', stateAfter.todos.length)
}
