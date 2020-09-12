Cypress.Commands.add('login', (username, password) => {
  cy.get('[data-testid=username]').type(username);
  cy.get('[data-testid=password]').type(password);
  cy.get('[data-testid=submit]').click();
});
