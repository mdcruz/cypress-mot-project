/// <reference types="Cypress" />

describe('Windows', () => {
  it('should handle window alerts', () => {
    cy.visit('https://the-internet.herokuapp.com/context_menu');
    cy.get('#hot-spot').rightclick();

    cy.on('window:alert', (text) => {
      expect(text).to.equal('You selected a context menu');
    });
  });
});
