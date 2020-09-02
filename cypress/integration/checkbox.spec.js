/// <reference types="Cypress" />

describe('Checkbox', () => {
  it('should tick the first checkbox successfully', () => {
    cy.visit('https://the-internet.herokuapp.com/checkboxes');
    cy.get('#checkboxes > :nth-child(1)').as('firstCheckbox');

    cy.get('@firstCheckbox').click().should('have.attr', 'checked');
  });
});
