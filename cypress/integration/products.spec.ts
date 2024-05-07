describe('Contact', () => {
  it('Should login and navigate to contact page', () => {
    cy.login('user1', 'password');
    cy.get('app-navigation li').eq(1).click();
    cy.url().should('includes', 'contact');
  });
});
