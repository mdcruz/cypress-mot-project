/// <reference types="Cypress" />

describe('Login feature', () => {
  beforeEach(() => cy.fixture('login-details').as('testData'));

  describe('Login via UI', () => {
    beforeEach(() =>
      cy.visit(`${Cypress.env('REST_BOOKER_PLATFORM')}/#/admin`)
    );

    it('should login successfully when given the correct credentials', () => {
      cy.get('@testData').then((data) => {
        cy.loginViaUI(
          data.validCredentials.username,
          data.validCredentials.password
        );
      });

      cy.get('#frontPageLink').should('be.visible');
    });

    it('should fail login when given incorrect credentials', () => {
      cy.get('@testData').then((data) => {
        cy.loginViaUI(
          data.invalidCredentials.username,
          data.invalidCredentials.password
        );
      });

      cy.get('#frontPageLink').should('not.be.visible');
    });
  });

  describe('Login via API', () => {
    it('should authorise the user successfully', () => {
      cy.get('@testData').then((data) => {
        cy.loginViaAPI(
          data.validCredentials.username,
          data.validCredentials.password
        );
      });

      cy.visit(`${Cypress.env('REST_BOOKER_PLATFORM')}/#/admin`);
      cy.get('#frontPageLink').should('be.visible');
    });
  });
});
