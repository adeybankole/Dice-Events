export class finalEventScreen {

    successScreen() {
        cy.contains('Client Admin Account, your event’s been published.')
            .should('be.visible');
    }
}