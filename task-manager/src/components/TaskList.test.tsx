import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import App from "../App";
import TaskList from "./TaskList";
import { addTask } from "../redux/actions";
import { toggleTaskStatus, removeTask, setFilter } from "../redux/actions";

const mockStore = configureStore([]);

describe("App component", () => {
  let store: any;
  let component: any;

  beforeEach(() => {
    store = mockStore({
      tasks: [],
      filter: "All",
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

  it("should set the filter when a filter button is clicked", () => {
    const { getByText } = component;

    // Click the 'Completed' filter button
    const filterButton = getByText("Completed");
    fireEvent.click(filterButton);

    // Verify the dispatched action
    const actions = store.getActions();
    expect(actions).toEqual([setFilter("completed")]);
  });
});
