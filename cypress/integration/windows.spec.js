/// <reference types="Cypress" />

describe('Windows', () => {
  it('should handle window alerts', () => {
    cy.visit(`${Cypress.env('THE_INTERNET_APP')}/context_menu`);
    cy.get('#hot-spot').rightclick();

    cy.on('window:alert', (text) => {
      expect(text).to.equal('You selected a context menu');
    });
  });
});
