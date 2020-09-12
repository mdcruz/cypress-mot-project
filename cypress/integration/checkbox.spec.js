/// <reference types="Cypress" />

describe('Checkbox', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/checkboxes');
    cy.get('h3').invoke('text').as('headingText');
  });

  it('should assert the heading text correctly', function () {
    expect(this.headingText).to.equal('Checkboxes');
  });
});
