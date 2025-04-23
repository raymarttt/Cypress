class Automation_registration {

    // cy.get('[data-qa="signup-name"]').type(user.username)
    //         cy.get('[data-qa="signup-email"]').type(user.email)
    //         cy.get('[data-qa="signup-button"]').click() 
    //         cy.get('#id_gender1').click() 
    //         cy.get('[data-qa="name"]')
    //         cy.get('[data-qa="email"]')
    //         cy.get('[data-qa="password"]').type("vertere22")
    //         cy.get('[data-qa="days"]')
    //         cy.get('[data-qa="days"]').select(29)
    //         cy.get('[data-qa="months"]')
    //         cy.get('[data-qa="months"]').select("March")
    //         cy.get('[data-qa="years"]')
    //         cy.get('[data-qa="years"]').select("2000")
    //         cy.get('[data-qa="first_name"]').type("Raymart")
    //         cy.get('[data-qa="last_name"]').type("Lachica")
    //         cy.get('[data-qa="company"]').type("Vertere Global Solution Inc.")
    //         cy.get('[data-qa="address"]').type("7088 Symohony St")
    //         cy.get('[data-qa="country"]').select("Australia")
    //         cy.get('[data-qa="state"]').type("New South Wales")
    //         cy.get('[data-qa="city"]').type("Sydney")
    //         cy.get('[data-qa="zipcode"]').type("2000")
    //         cy.get('[data-qa="mobile_number"]').type("+618907280")
    //         cy.get('[data-qa="create-account"]').click()

    //define locators
    usernameInput = '[data-qa="signup-name"]' 
    emailInput = '[data-qa="signup-email"]'
    signupbutton = '[data-qa="signup-button"]'
    genderInput = '#id_gender1'
    nameInput = '[data-qa="name"]'
    emailRegInput = '[data-qa="email"]'
    passwordInput = '[data-qa="password"]'
    daysselectInput = '[data-qa="days"]'
    daysInput = '[data-qa="days"]'
    monthselectInput = '[data-qa="months"]'
    monthInput = '[data-qa="months"]'
    yearselectInput = '[data-qa="years"]'
    yearInput = '[data-qa="years"]'
    firstnameInput = '[data-qa="first_name"]'
    lastnameInput = '[data-qa="last_name"]'
    companyInput = '[data-qa="company"]'
    addressInput = '[data-qa="address"]'
    countryInput = '[data-qa="country"]'
    stateInput = '[data-qa="state"]'
    cityInput = '[data-qa="city"]'
    zipCodeInput = '[data-qa="zipcode"]'
    phoneNumberInput = '[data-qa="mobile_number"]'
    createInput = '[data-qa="create-account"]'

    
    

    //
    fillregistrationform(user) {
            cy.get(this.genderInput).click() 
            cy.get(this.nameInput)
            cy.get(this.emailRegInput)
            cy.get(this.passwordInput).type("vertere22")
            cy.get(this.daysselectInput)
            cy.get(this.daysInput).select(29)
            cy.get(this.monthselectInput)
            cy.get(this.monthInput).select("March")
            cy.get(this.yearselectInput)
            cy.get(this.yearInput).select("2000")
            cy.get(this.firstnameInput).type("Raymart")
            cy.get(this.lastnameInput).type("Lachica")
            cy.get(this.companyInput).type("Vertere Global Solution Inc.")
            cy.get(this.addressInput).type("7088 Symohony St")
            cy.get(this.countryInput).select("Australia")
            cy.get(this.stateInput).type("New South Wales")
            cy.get(this.cityInput).type("Sydney")
            cy.get(this.zipCodeInput).type("2000")
            cy.get(this.phoneNumberInput).type("+618907280")

       
    }

    fillLoginform(user) {
        cy.get(this. usernameInput).type(user.username)
        cy.get(this.emailInput).type(user.email)
    }
    
    fillsubmitform(user) {
    cy.get(this.signupbutton).click() 

    }
    
    fillcreateform(user) {
    cy.get(this.createInput).click()
    }
    
}

export default new Automation_registration();