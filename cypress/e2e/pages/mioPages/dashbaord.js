export class mioDashboard {

    verifyDashboard() {
        cy.get('h1').should('be.visible', { timeout: 10000 });
    }
    clickCreateEvent() {
        cy.get("a[href='/events/new']").click()
    }
}