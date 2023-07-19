import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import reportWebVitals from './reportWebVitals';

console.log(store.getState())

const unsubscribe = store.subscribe(() => {
  console.log('State after dispatch', store.getState());
})

store.dispatch({
  type: 'todo/TODO_ADDED',
  // ID here is dummy and is generated later on
  payload: { id: 1, description: "Learn about actions", completed: false }
})
store.dispatch({
  type: 'todo/TODO_ADDED',
  payload: { id: 1, description: "Learn about reducers", completed: false }
})
store.dispatch({
  type: 'todo/TODO_ADDED',
  payload: { id: 1, description: "Learn about stores", completed: false }
})

store.dispatch({ type: 'todo/TODO_TOGGLED', payload: 2 })
store.dispatch({ type: 'todo/TODO_TOGGLED', payload: 2 })
store.dispatch({ type: 'todo/TODO_TOGGLED', payload: 2 })

store.dispatch({ type: 'filter/STATUS_FILTER_CHANGED', payload: 'Active' })

store.dispatch({
  type: 'filter/COLOR_FILTER_CHANGED',
  payload: { color: 'red', changeType: 'added' }
})

// Stop listening to state updates
unsubscribe()

// Dispatch one more action to see what happens

store.dispatch({ type: 'todo/TODO_ADDED', payload: 'Try creating a store' })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider >
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
