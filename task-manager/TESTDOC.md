# Test Documentation

The following documentation describes the tests written for an example to-do app using Cypress. The tests cover various functionalities of the app, including adding a new task, marking a task as completed, removing a task, and filtering tasks based on their completion status. Additionally, error handling and testing Redux store actions are also included.

## Table of Contents

- [Add a new task](#add-a-new-task)
- [Mark a task as completed](#mark-a-task-as-completed)
- [Remove a task](#remove-a-task)
- [Filter uncompleted tasks](#filter-uncompleted-tasks)
- [Filter completed tasks](#filter-completed-tasks)
- [Error Handling - Adding an Empty Task](#error-handling---adding-an-empty-task)
- [Redux Store and Actions](#redux-store-and-actions)
  - [Checking for the state](#checking-for-the-state)
  - [Checking for addTask action](#checking-for-addtask-action)
  - [Checking for deleteTask action](#checking-for-deletetask-action)
  - [Checking for toggleTaskStatus action](#checking-for-toggletaskstatus-action)
  - [Checking for setFilter action](#checking-for-setfilter-action)

---

## Add a new task

### Test Case

- **Test Name**: can add new todo items
- **Description**: Tests the ability to add new tasks to the to-do list.
- **Steps**:
  1. Visit the app's homepage.
  1. Enter a task in the input field.
  1. Click the "Add Task" button.
  1. Verify that the new task is displayed correctly.

---

## Mark a task as completed

### Test Case

- **Test Name**: should mark a task as completed and update its UI
- **Description**: Tests the functionality to mark a task as completed in the to-do list.
- **Steps**:
  1. Visit the app's homepage.
  1. Enter a task in the input field.
  1. Click the "Add Task" button.
  1. Click the status button (❌) of the task to mark it as completed.
  1. Verify that the status button now shows a checkmark (✅).

---

## Remove a task

### Test Case

- **Test Name**: should remove a task from the list
- **Description**: Tests the ability to remove a task from the to-do list.
- **Steps**:
  1. Visit the app's homepage.
  1. Enter a task in the input field.
  1. Click the "Add Task" button.
  1. Note the initial task count.
  1. Click the "Remove" button of the task to remove it.
  1. Verify that the task has been removed by checking the updated task count.

---

## Filter uncompleted tasks

### Test Case

- **Test Name**: can filter for uncompleted todo items
- **Description**: Tests the functionality to filter and display uncompleted tasks in the to-do list.
- **Steps**:
  1. Visit the app's homepage.
  1. Enter a task in the input field.
  1. Click the "Add Task" button.
  1. Enter another uncompleted task in the input field.
  1. Click the "Add Task" button.
  1. Note the count of uncompleted tasks.
  1. Click the "Incomplete" filter button.
  1. Verify that completed status buttons (✅) are not visible.
  1. Verify that uncompleted status buttons (❌) are visible.
  1. Verify the count of displayed uncompleted tasks.

---

## Filter completed tasks

### Test Case

- **Test Name**: can filter for completed todo items
- **Description**: Tests the functionality to filter and display completed tasks in the to-do list.
- **Steps**:
  1. Visit the app's homepage.
  1. Add multiple tasks to the list.
  1. Click the status buttons (❌) of the first three tasks to mark them as completed.
  1. Note the count of completed tasks.
  1. Click the "Completed" filter button.
  1. Verify that uncompleted status buttons (❌) are not visible.
  1. Verify that completed status buttons (✅) are visible.
  1. Verify the count of displayed completed tasks.

---

## Error Handling - Adding an Empty Task

### Test Case

- **Test Name**: displays an error message when trying to add an empty task
- **Description**: Tests the error handling for adding an empty task to the to-do list.
- **Steps**:
  1. Visit the app's homepage.
  1. Click the "Add Task" button without entering any task.
  1. Verify that an error message is displayed indicating that the task cannot be empty.

---

## Redux Store and Actions

### Checking for the state

### Test Case

- **Test Name**: should have the correct initial state
- **Description**: Tests the initial state of the Redux store.
- **Steps**:
  1. Visit the app's homepage.
  1. Verify that the initial state of the Redux store matches the expected state.

### Checking for addTask action

### Test Case

- **Test Name**: should dispatch addTask action correctly
- **Description**: Tests the dispatching of the addTask action in the Redux store.
- **Steps**:
  1. Visit the app's homepage.
  1. Enter a task in the input field.
  1. Click the "Add Task" button.
  1. Verify that the addTask action is dispatched with the correct payload.

### Checking for deleteTask action

### Test Case

- **Test Name**: should dispatch deleteTask action correctly
- **Description**: Tests the dispatching of the deleteTask action in the Redux store.
- **Steps**:
  1. Visit the app's homepage.
  1. Add multiple tasks to the list.
  1. Click the "Remove" button of a task to remove it.
  1. Verify that the deleteTask action is dispatched with the correct payload.

### Checking for toggleTaskStatus action

### Test Case

- **Test Name**: should dispatch toggleTaskStatus action correctly
- **Description**: Tests the dispatching of the toggleTaskStatus action in the Redux store.
- **Steps**:
  1. Visit the app's homepage.
  1. Add multiple tasks to the list.
  1. Click the status button (❌) of a task to mark it as completed.
  1. Verify that the toggleTaskStatus action is dispatched with the correct payload.

### Checking for setFilter action

### Test Case

- **Test Name**: should dispatch setFilter action correctly
- **Description**: Tests the dispatching of the setFilter action in the Redux store.
- **Steps**:
  1. Visit the app's homepage.
  1. Click the "Incomplete" or "Completed" filter button.
  1. Verify that the setFilter action is dispatched with the correct payload.

---

This documentation provides an overview of the test cases that cover the functionalities and error handling of the example to-do app. It also includes testing scenarios for Redux store actions. Feel free to add more test cases or modify the existing ones as per your requirements.