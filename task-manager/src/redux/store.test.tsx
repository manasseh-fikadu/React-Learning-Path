import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import rootReducer from './reducers';
import { addTask, removeTask, toggleTaskStatus, setFilter } from './actions';
import App from '../App';

describe('Redux Store', () => {
  let store: any;

  beforeEach(() => {
    store = createStore(rootReducer);
  });

  test('should have the correct initial state', () => {
    expect(store.getState()).toEqual({
      tasks: [],
      filter: 'all',
    });
  });

  test('should dispatch addTask action and update the state', () => {
    const task = { text: 'Task 1', completed: false };
    store.dispatch(addTask(task));
    expect(store.getState().tasks).toContainEqual(task);
  });

  test('should dispatch deleteTask action and update the state', () => {
    const task = { text: 'Task 1', completed: false };
    store.dispatch(addTask(task));
    store.dispatch(removeTask(0));
    expect(store.getState().tasks).not.toContainEqual(task);
  });

  test('should dispatch toggleTaskStatus action and update the state', () => {
    const task = { text: 'Task 1', completed: false };
    store.dispatch(addTask(task));
    store.dispatch(toggleTaskStatus(0));
    expect(store.getState().tasks[0].completed).toBe(true);
  });

  test('should dispatch setFilter action and update the state', () => {
    store.dispatch(setFilter('completed'));
    expect(store.getState().filter).toBe('completed');
  });

  test('should integrate with React components', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});