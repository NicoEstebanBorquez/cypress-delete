describe('Login', () => {
  it('Should not login if the form is invalid', () => {
    cy.visit('/');
    cy.url().should('includes', 'login');
    cy.get('[formControlName="username"]').type('user1');
    cy.get('button').click();
    cy.url().should('not.include', 'home');
  });

  it('Should login if the form is valid', () => {
    cy.login('user1', 'password');
    cy.url().should('include', 'home');
  });
});
