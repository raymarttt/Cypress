class Automation_addCard {
 
    //define locators
    fullnameInput = '[data-qa="name-on-card"]'
    cardnumberInput = '[data-qa="card-number"]'
    CVCInput = '[data-qa="cvc"]'
    monthInput = '[data-qa="expiry-month"]'
    yearInput = '[data-qa="expiry-year"]'
    payButtom = '[data-qa="pay-button"]'
    getbuttom = ':nth-child(5) > a'

    fillcardForm(user) {
        cy.get(this.fullnameInput).type("Raymart Lachica")
        cy.get(this.cardnumberInput).type(879017283047)
        cy.get(this.CVCInput).type(119)
        cy.get(this. monthInput).type(10)
        cy.get(this.yearInput).type(2035)
        cy.get(this.payButtom).click()
        cy.get(this.getbuttom).click()

    }
  

}