describe('E-Commerce Test Flow/Workflow', () => {
   
   beforeEach(() => {
      cy.auth('standard_user','secret_sauce')
   });
 
   it('Should successfully login', () => {
     // Verify we're on the inventory page after login
     cy.url().should('include', '/inventory.html')
     cy.get('.inventory_list').should('be.visible')
   });
   
   it('Should successfully add to cart', () => {
    
    cy.addToCart();
  

  
  });

  it('Should successfully checkout', () => {
    
    cy.addToCart();
    cy.checkout()
   
    const testName = 'checkout-'
    const date = new Date().toISOString()
    const formattedDate = `${date.slice(5,7)}-${date.slice(8,10)}-${date.slice(2,4)}`
    cy.screenshot(testName+formattedDate, {capture: 'viewport'})

    cy.get('[data-test="back-to-products"]').click()
 
  
  });
});
    