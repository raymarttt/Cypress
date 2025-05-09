import createUser from "../../support/faker"

describe('Automation Exercise', () => {
    before(()=>{
        cy.writeFile('cypress/fixtures/faker.json',createUser())
    })
    it('Launch browser', () => {
        cy.fixture("faker").then((user)=>{
            cy.generateData()
            cy.visit('https://automationexercise.com/') //site link
            cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click() //add to cart
            cy.get('u').click() //view cart
            cy.get('.col-sm-6 > .btn').click() //proceed checkout
            cy.get('.modal-body > :nth-child(2) > a > u').click() //register
            //signup
            cy.fillregform(user)
            // cy.get('[data-qa="signup-name"]').type(user.username)
            // cy.get('[data-qa="signup-email"]').type(user.email)
            // cy.get('[data-qa="signup-button"]').click() 
            // cy.get('#id_gender1').click() 
            // cy.get('[data-qa="name"]')
            // cy.get('[data-qa="email"]')
            // cy.get('[data-qa="password"]').type("vertere22")
            // cy.get('[data-qa="days"]')
            // cy.get('[data-qa="days"]').select(29)
            // cy.get('[data-qa="months"]')
            // cy.get('[data-qa="months"]').select("March")
            // cy.get('[data-qa="years"]')
            // cy.get('[data-qa="years"]').select("2000")
            // cy.get('[data-qa="first_name"]').type("Raymart")
            // cy.get('[data-qa="last_name"]').type("Lachica")
            // cy.get('[data-qa="company"]').type("Vertere Global Solution Inc.")
            // cy.get('[data-qa="address"]').type("7088 Symohony St")
            // cy.get('[data-qa="country"]').select("Australia")
            // cy.get('[data-qa="state"]').type("New South Wales")
            // cy.get('[data-qa="city"]').type("Sydney")
            // cy.get('[data-qa="zipcode"]').type("2000")
            // cy.get('[data-qa="mobile_number"]').type("+618907280")
            // cy.get('[data-qa="create-account"]').click()
            cy.get('[data-qa="continue-button"]').click()
            cy.get(':nth-child(10) > a').should('contain', `Logged in as ${user.username}`)
            cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
            cy.get('.col-sm-6 > .btn').click()
            cy.get('.form-control').type("hope the size fit me")
            cy.get(':nth-child(7) > .btn').click()
            cy.get('[data-qa="name-on-card"]').type("Raymart Lachica")
            cy.get('[data-qa="card-number"]').type(879017283047)
            cy.get('[data-qa="cvc"]').type(119)
            cy.get('[data-qa="expiry-month"]').type(10)
            cy.get('[data-qa="expiry-year"]').type(2035)
            cy.get('[data-qa="pay-button"]').click()
            cy.get(':nth-child(5) > a').click()
            cy.get('[data-qa="continue-button"]').click()



        })
        
        

    })
})
