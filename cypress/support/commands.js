// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("fill", ({ name, email, rating, comment }) => {
  cy.visit("http://localhost:3000");
  cy.get('[name="name"]').type(name).should("have.value", name);
  cy.get('[name="email"]').type(email).should("have.value", email);
  cy.get('[name="comment"]').type(comment).should("have.value", comment);
  cy.get(`[id="ratings-${rating}"]`).click();
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
