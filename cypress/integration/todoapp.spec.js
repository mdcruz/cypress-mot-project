/// <reference types="Cypress" />

describe('Todo application', () => {
  it('should add a new todo item', () => {
    cy.visit('http://todomvc.com/examples/react/#/active');
    cy.get('.new-todo').type('new todo {enter}');
    cy.get('.todo-list li')
      .should('have.length', 1)
      .and('have.text', 'new todo');
  });
});
