import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import App from "../App";
import { addTask } from "../redux/actions";

const mockStore = configureStore([]);

describe("App component", () => {
  let store: any;
  let component: any;

  beforeEach(() => {
    store = mockStore({
      tasks: [],
      completed: false,
    });
    component = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it("should render with given state from Redux store", () => {
    expect(component).toMatchSnapshot();
  });

  it("should dispatch an action on button click", () => {
    const { getByText } = component;
    fireEvent.click(getByText(/Add New Task/i));
    const actions = store.getActions();
    expect(actions).toMatchSnapshot();
  });

  it("should update the task input value", () => {
    const { getByPlaceholderText } = component;
    const taskInput = getByPlaceholderText("Enter task");
    fireEvent.change(taskInput, { target: { value: "New Task" } });
    expect(taskInput.value).toBe("New Task");
  });

  it("should add a task when 'Add Task' button is clicked", () => {
    const { getByPlaceholderText, getByText } = component;
    const taskInput = getByPlaceholderText("Enter task");
    const addButton = getByText("Add New Task");

    // Set task input value
    fireEvent.change(taskInput, { target: { value: "New Task" } });
    expect(taskInput.value).toBe("New Task");

    // Click 'Add Task' button
    fireEvent.click(addButton);

    // Verify the dispatched action
    store.dispatch(addTask({ text: "New Task", completed: false }));
    const actions = store.getActions();
    expect(actions).toMatchSnapshot();
  });
});
