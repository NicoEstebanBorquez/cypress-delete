describe('Login', () => {
  /*it('Should not login if the form is invalid', () => {
    cy.visit('/');
    cy.url().should('includes', 'login');
    cy.get('[formControlName="username"]').type('user1');
    cy.get('button').click();
    cy.url().should('not.include', 'home');
  });*/

  it('Should navigate to Success page if form is valid', () => {
    cy.visit('/contact');
    cy.get('[formControlName="name"]').type('Nico Esteban');
    cy.get('[formControlName="telephone"]').type('+34666555444');
    cy.get('[formControlName="message"]').type('This is a test!');
    cy.get('button').click();
    cy.url().should('include', 'success');
  });
});
