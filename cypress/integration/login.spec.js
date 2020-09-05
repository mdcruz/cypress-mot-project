/// <reference types="Cypress" />

describe('Login feature', () => {
  beforeEach(() => {
    cy.fixture('login-details').as('testData');
    cy.visit(`${Cypress.env('REST_BOOKER_PLATFORM')}/#/admin`);
  });

  it('should login successfully when given the correct credentials', () => {
    cy.get('@testData').then((data) => {
      cy.login(data.validCredentials.username, data.validCredentials.password);
    });

    cy.get('#frontPageLink').should('be.visible');
  });

  it('should fail login when given incorrect credentials', () => {
    cy.get('@testData').then((data) => {
      cy.login(
        data.invalidCredentials.username,
        data.invalidCredentials.password
      );
    });

    cy.get('#frontPageLink').should('not.be.visible');
  });
});
