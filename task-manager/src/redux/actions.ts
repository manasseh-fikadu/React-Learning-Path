// Action types
export const ADD_TASK = "ADD_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const TOGGLE_TASK_STATUS = "TOGGLE_TASK_STATUS";
export const SET_FILTER = "SET_FILTER";

// Define action interfaces
interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: { text: string; completed: boolean };
}

interface UpdateTaskAction {
  type: typeof UPDATE_TASK;
  payload: { index: number; task: string };
}

interface ToggleTaskStatusAction {
  type: typeof TOGGLE_TASK_STATUS;
  payload: number; // Index of the task to toggle
}

interface RemoveTaskAction {
  type: typeof REMOVE_TASK;
  payload: number; // Index of the task to remove
}

interface SetFilterAction {
  type: typeof SET_FILTER;
  payload: string; // "all", "completed", or "incomplete"
}

// Combine all action types into a union type
export type TaskActionTypes =
  | AddTaskAction
  | UpdateTaskAction
  | RemoveTaskAction
  | ToggleTaskStatusAction
  | SetFilterAction;

// Action creators
export const addTask = (task: {
  text: string;
  completed: boolean;
}): TaskActionTypes => ({
  type: ADD_TASK,
  payload: task,
});

export const updateTask = (index: number, task: string): TaskActionTypes => ({
  type: UPDATE_TASK,
  payload: { index, task },
});

export const removeTask = (index: number): TaskActionTypes => ({
  type: REMOVE_TASK,
  payload: index,
});

export const toggleTaskStatus = (index: number): TaskActionTypes => ({
  type: TOGGLE_TASK_STATUS,
  payload: index,
});

export const setFilter = (filter: string): TaskActionTypes => ({
  type: SET_FILTER,
  payload: filter,
});
