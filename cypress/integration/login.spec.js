/// <reference types="Cypress" />

describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.fixture('login-details').as('testData');
  });

  it('should login successfully when given the correct credentials', () => {
    cy.get('@testData').then((data) => {
      cy.login(data.validCredentials.username, data.validCredentials.password);
    });

    cy.get('.radius').click();
    cy.url().should('contain', 'secure');
  });

  it('should fail login when given incorrect credentials', () => {
    cy.get('@testData').then((data) => {
      cy.login(
        data.invalidCredentials.username,
        data.invalidCredentials.password
      );
    });

    cy.get('.radius').click();
    cy.get('#flash').should('be.visible');
  });
});
