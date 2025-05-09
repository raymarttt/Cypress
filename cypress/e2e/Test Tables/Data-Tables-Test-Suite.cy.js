describe('Data Tables Test Suite', () => {

    beforeEach(() => {
        cy.viewport(850, 650);
        cy.visit('https://datatables.net/');
    });

    it('Should successfully open the website', () => {
        cy.visit('https://datatables.net/');
    });

    it('Should successfully search Cedric Kelly', () => {
        cy.get(':nth-child(1) > .dtr-control');
        cy.get('#dt-search-0').type('Cedric Kelly');
        cy.get('#dt-search-0').click();
    });

    it('Should successfully have 10 names in one page', () => {
        cy.get('#dt-length-0').select('10');
    });

    it('Should successfully sort ages from youngest to oldest', () => {
        cy.get('[data-dt-column="3"] > .dt-column-header > .dt-column-order').click();
    });

    it('Should successfully sort salaries from highest to lowest', () => {
        cy.get('[data-dt-column="5"] > .dt-column-header > .dt-column-order').click();
        cy.get('[data-dt-column="5"] > .dt-column-header > .dt-column-order').click();
    });

    it('Should successfully filter all users in Sydney', () => {
        cy.get('#dt-search-0').type('Sydney');
        cy.wait(500);
        cy.get('table tbody tr:visible').each(($row) => {
            cy.wrap($row).find('td').eq(2).should('contain.text', 'Sydney');
        });
    });

    it('Should successfully filter all Sales Assistants', () => {
        cy.get('#dt-search-0').clear().type('Sales Assistant');
        cy.wait(500);
        cy.get('table tbody tr:visible').each(($row) => {
            cy.wrap($row).find('td').eq(1).should('contain.text', 'Sales Assistant');
        });
    });

    it('Should successfully sort start dates from oldest to newest', () => {
        cy.contains('Start date').click();
        cy.wait(500);
    });

    it('Should successfully filter all Software Engineers', () => {
        cy.get('#dt-search-0').clear().type('Software Engineer');
        cy.wait(500);
        cy.get('table tbody tr:visible').each(($row) => {
            cy.wrap($row).find('td').eq(1).should('contain.text', 'Software Engineer');
        });
    });

    it('Should filter all users in New York', () => {
        cy.get('#dt-search-0').clear().type('New York');
        cy.wait(500);
        cy.get('table tbody tr:visible').each(($row) => {
            cy.wrap($row).find('td').eq(2).should('contain.text', 'New York'); 
        });
    });

});
