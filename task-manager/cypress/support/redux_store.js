// Import your Redux store setup and actions
import { createStore } from "redux";
import rootReducer from "../../src/redux/reducers";
// Create the Redux store
const store = createStore(rootReducer);

Cypress.Commands.add("store", () => {
  return cy.window().its("store");
});
