export class reviewEvent {

    previewDetails() {
        cy.wait(3000)
        cy.get("button[data-id='save']").click()
    }
}