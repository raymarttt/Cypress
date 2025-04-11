describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    cy.contains('Swag Labs').should('be.visible')
    cy.url().should ("include" , '/inventory')
  })
  it('user unable to login with invalid username and password',() => {
  cy.visit('https://www.saucedemo.com/')
  cy.get('[data-test="username"]').type("standard_userabc")
  cy.get('[data-test="password"]').type("abc")
  cy.get('[data-test="login-button"]').click()
  //cy.get('[data-test="username"]').should('visible')
  //cy.get('[data-test="password"]').should('be.visible')
  //cy.get('[data-test="username"]').should('be.visible')
  cy.get('[data-test="error"]').should('be.visible')

  

})

})