import { createStore } from "redux";
import taskReducer from "./reducers";

// Define the structure of a single task
export interface Task {
  text: string;
  completed: boolean;
}

// Define the structure of the root state for the Redux store
export interface RootState {
  tasks: Task[]; // Array of tasks
  filter: string; // Current filter for task list
}

// Create the Redux store using the taskReducer and Redux DevTools extension
const store = createStore(
  taskReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
