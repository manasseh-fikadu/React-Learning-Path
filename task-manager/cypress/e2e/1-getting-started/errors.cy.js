describe("Error Handling", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  describe("Error Handling - Adding an Empty Task", () => {
    it("displays an error message when trying to add an empty task", () => {
      // Click the "Add Task" button without entering a task text
      cy.contains("Add Task").click();

      // Verify that the error message is displayed
      cy.get(".text-red-500")
        .should("be.visible")
        .contains("Task text cannot be empty");
    });
  });
});
