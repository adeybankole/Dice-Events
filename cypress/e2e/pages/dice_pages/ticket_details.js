export class ticketDetails {
    selectSecondTicket() {
        cy.get('.PurchaseAlert__Buttons-sc-1hpuona-6 > .ButtonBase-sc-1lkfwal-0').click()
        cy.get('.PurchaseTickets__TicketTypes-sc-1hge6pd-16 li:nth-child(2)').click()
        cy.get('.PurchaseTickets__TicketTypes-sc-1hge6pd-16 li:nth-child(2)')
            .within(() => {
                cy.contains('Checkout').click();
            });
    }

}