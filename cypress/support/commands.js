import {generateCustomerData} from '../support/utils.js'
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('auth', (username, password) => { // FUNCTION OR METHOD --> Then i-call natin sya sa spec or test file natin.
    cy.visit('https://www.saucedemo.com/', {timeout: 240000})
      cy.get('[data-test="username"]').type(username)
      cy.get('[data-test="password"]').type(password)
      cy.get('[data-test="login-button"]').click()
  }); 
  
  Cypress.Commands.add('addToCart', () => {
   
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="shopping-cart-link"]').click();

  });

  Cypress.Commands.add('checkout', () => {

    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type("Raymart")
    cy.get('[data-test="lastName"]').type("Lachica")
    cy.get('[data-test="postalCode"]').type("1207")
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
   
  });

  Cypress.Commands.add('generateData' , () => {
    let testData = generateCustomerData()
    cy.writeFile('cypress/fixtures/testData.json', testData);
  });
  
  Cypress.Commands.add('saveCart', () => {
    cy.window().then((win) => {
      const cart = win.localStorage.getItem('cart-contents') || '[]';
      Cypress.env('savedCart', cart);
    });
  });

  Cypress.Commands.add('restoreCart', () => {
    const cart = Cypress.env('savedCart') || '[]';
    cy.window().then((win) => {
      win.localStorage.setItem('cart-contents', cart);
    });
  });
  
  