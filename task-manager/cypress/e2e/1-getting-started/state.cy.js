describe("Redux Store and Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  describe("Checking for the state", () => {
    it("should have an empty array of tasks in the Redux store", () => {
      cy.window()
        .its("store")
        .invoke("getState")
        .its("tasks")
        .should("have.length", 0);
    });
  });

  describe("Checking for addTask action", () => {
    it("should add a task to the Redux store when addTask action is dispatched", () => {
      cy.window()
        .its("store")
        .invoke("dispatch", {
          type: "ADD_TASK",
          payload: {
            text: "Test Task",
            completed: false,
          },
        });
    });
  });

  describe("Checking for deleteTask action", () => {
    it("should delete a task from the Redux store when deleteTask action is dispatched", () => {
      cy.window()
        .its("store")
        .invoke("dispatch", {
          type: "DELETE_TASK",
          payload: {
            id: 1,
          },
        });
    });
  });

  describe("Checking for toggleTaskStatus action", () => {
    it("should toggle the task status in the Redux store when toggleTaskStatus action is dispatched", () => {
      cy.window()
        .its("store")
        .invoke("dispatch", {
          type: "TOGGLE_TASK_STATUS",
          payload: {
            id: 1,
          },
        });
    });
  });

  define("Checking for setFilter action", () => {
    it("should set the filter in the Redux store when setFilter action is dispatched", () => {
      cy.window()
        .its("store")
        .invoke("dispatch", {
          type: "SET_FILTER",
          payload: {
            filter: "all",
          },
        });
    });
  });
});
