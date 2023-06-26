export class ticketModal {
    firstTicket() {
        cy.get(".lgmAvs input[name='name']").clear()
        cy.get(".lgmAvs input[name='name']").type('Seating', { force: true })
        cy.get(" input[name='faceValue']").clear()
        cy.get(" input[name='faceValue']").type('1000', { force: true })
        cy.get("input[name='allocation']").clear()
        cy.get("input[name='allocation']").type('20', { force: true })
        cy.get(".Modal__ModalFooter-sc-1pb5y5w-7 > .-preset-primary-outline").click()
        cy.wait(2000)
    }
    secondTicket() {
        cy.get('label button .icon-button_container').eq(1).click();
        cy.get(".lgmAvs input[name='name']").clear()
        cy.get(".lgmAvs input[name='name']").type('VIP', { force: true })
        cy.get(" input[name='faceValue']").clear()
        cy.get(" input[name='faceValue']").type('5000', { force: true })
        cy.get("input[name='allocation']").clear()
        cy.get("input[name='allocation']").type('20', { force: true })
        cy.get(".Modal__ModalFooter-sc-1pb5y5w-7 > .-preset-primary-outline").click()
    }
}