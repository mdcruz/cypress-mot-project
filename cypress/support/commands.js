Cypress.Commands.add('loginViaUI', (username, password) => {
  cy.get('#username').type(username);
  cy.get('#password').type(password);
  cy.get('[data-testid="submit"]').click();
});

Cypress.Commands.add('loginViaAPI', (username, password) => {
  cy.request({
    method: 'POST',
    url: `${Cypress.env('REST_BOOKER_PLATFORM')}/auth/login`,
    body: {
      username,
      password,
    },
  }).then((res) => cy.setCookie('token', res.body.token));
});
