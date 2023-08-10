import {
  ADD_TASK,
  // UPDATE_TASK,
  REMOVE_TASK,
  TaskActionTypes,
  TOGGLE_TASK_STATUS,
  SET_FILTER,
} from "./actions";

// Define the structure of a single task
interface Task {
  text: string;
  completed: boolean;
}

// Define the structure of the task state
interface TaskState {
  tasks: Task[];
  filter: string; // Add filter property to the state
}

// Initial state with an empty task array and a default filter value
const initialState: TaskState = {
  tasks: [],
  filter: "all", // Default filter value
};

// Task reducer
const taskReducer = (
  state = initialState,
  action: TaskActionTypes
): TaskState => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    // case UPDATE_TASK:
    //   return {
    //     ...state,
    //     tasks: state.tasks.map((task, index) =>
    //       index === action.payload.index ? action.payload.task : task
    //     ),
    //   };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((_, index) => index !== action.payload),
      };
    case TOGGLE_TASK_STATUS:
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
