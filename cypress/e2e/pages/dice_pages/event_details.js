export class eventDetails{
    buyNow(){
        cy.contains("Buy now").click({ force: true })
    }
    
}