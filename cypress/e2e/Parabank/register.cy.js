describe('Parabank Site', () => {
    it('Verify Registration', () => {
      cy.generateData()
      cy.fixture("testData").then((user)=>{
        cy.visit('https://parabank.parasoft.com/parabank/register.htm')
        cy.fillRegistrationForm(user) 
      // cy.get('[name="customer.firstName"]').type(user.firstName)
      // cy.get('[name="customer.lastName"]').type(user.lastName)
      // cy.get('[name="customer.address.street"]').type(user.address)
      // cy.get('[name="customer.address.city"]').type(user.city)
      // cy.get('[name="customer.address.state"]').type(user.state)
      // cy.get('[name="customer.address.zipCode"]').type(user.zipCode)
      // cy.get('[name="customer.phoneNumber"]').type(user.phoneNumber)
      // cy.get('[name="customer.ssn"]').type(user.ssn)
      // cy.get('[name="customer.username"]').type(user.username)
      // cy.get('[name="customer.password"]').type(user.password)
      // cy.get('[name="repeatedPassword"]').type(user.password)
      // cy.get('[value="Register"]').click()

      })

    })

    it('Customer Login', () => {
    
      cy.fixture("testData").then((user)=>{
      cy.visit('https://parabank.parasoft.com/parabank/register.htm')
      cy.get('[name="username"]').type(user.username)
      cy.get('[name="password"]').type(user.password)
      cy.get('[value="Log In"]').click()

    
      })


    })
  })