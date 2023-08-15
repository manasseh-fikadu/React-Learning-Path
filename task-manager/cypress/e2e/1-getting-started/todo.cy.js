/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  describe("Add a new task", () => {
    it("can add new todo items", () => {
      // Enter a task in the input field
      cy.get('input[type="text"]').type("New Task");

      // Click the "Add Task" button
      cy.contains("Add Task").click();

      // Verify that the new task is displayed correctly
      cy.contains("New Task").should("be.visible");
    });
  });

  describe("Mark a task as completed", () => {
    it("should mark a task as completed and update its UI", () => {
      cy.get('input[type="text"]').type("New Task");

      // Click the "Add Task" button
      cy.contains("Add Task").click();
      // Assuming there's at least one task in the list
      cy.get("button").contains("❌").first().click(); // Clicking the status button to mark as completed

      cy.get("button").contains("✅"); // Verifying that the status button is now showing a checkmark
    });
  });

  describe("Remove a task", () => {
    it("should remove a task from the list", () => {
      cy.get('input[type="text"]').type("New Task");

      cy.contains("Add Task").click();
      const initialTaskCount = 0;

      cy.get("button").contains("Remove").first().click();

      cy.get("table tbody tr").should("have.length", initialTaskCount); // Verifying that the task has been removed
    });
  });

  describe("Filter uncompleted tasks", () => {
    it("can filter for uncompleted todo items", () => {
      cy.get('input[type="text"]').type("New Task");

      cy.contains("Add Task").click();

      cy.get('input[type="text"]').type("New Task 1");

      cy.contains("Add Task").click();
      // Assuming there are both completed and uncompleted tasks in the list
      const uncompletedTaskCount = 2;

      // Clicking the "Incomplete" filter button
      cy.contains("button", "Incomplete").click();

      // Verifying that the uncompleted tasks are displayed
      cy.get("button").contains("✅").should("not.exist"); // Checking that completed status buttons are not visible
      cy.get("button").contains("❌").should("exist"); // Checking that uncompleted status buttons are visible
      cy.get("table tbody tr").should("have.length", uncompletedTaskCount); // Checking the count of displayed uncompleted tasks
    });
  });

  describe("Filter completed tasks", () => {
    it("can filter for completed todo items", () => {
      // Adding tasks
      const tasksToAdd = [
        "New Task",
        "New Task 1",
        "New Task 2",
        "New Task 3",
        "New Task 4",
        "New Task 5",
      ];
      tasksToAdd.forEach((task) => {
        cy.get('input[type="text"]').type(task);
        cy.contains("Add Task").click();
      });

      // Clicking on the first 3 ❌ buttons to mark them as completed
      cy.get("button").contains("❌").first().click();
      cy.get("button").contains("❌").first().click();
      cy.get("button").contains("❌").first().click();

      // Assuming there are both completed and uncompleted tasks in the list
      const completedTaskCount = 3; // Adjust this count based on your actual test data

      // Clicking the "Completed" filter button
      cy.contains("button", "Completed").click();

      // Verifying that the completed tasks are displayed
      cy.get("button").contains("❌").should("not.exist"); // Checking that uncompleted status buttons are not visible
      cy.get("button").contains("✅").should("exist"); // Checking that completed status buttons are visible
      cy.get("table tbody tr").should("have.length", completedTaskCount); // Checking the count of displayed completed tasks
    });
  });
});
