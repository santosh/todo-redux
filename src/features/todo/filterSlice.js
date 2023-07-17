const initialState = {
  status: 'All',
  colors: []
}

export function filterReducer(state = initialState, action) {
  switch (action.type) {
    case "filter/STATUS_FILTER_CHANGED": {
      return {
        ...state,
        status: action.payload
      }
    }
    default:
      return state
  }
}
