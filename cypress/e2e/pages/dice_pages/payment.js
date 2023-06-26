export class Payment {
    cardPayment() {
        cy.get("iframe[name*='__privateStripeFrame']").then(($iframe) => {
            const $body = $iframe.contents().find('body');
            cy.wrap($body).find('.CardNumberField-input-wrapper input').type("4111111111111111")
            cy.wrap($body).find('.CardField-expiry input').type("0625")
            cy.wrap($body).find('.CardField-cvc input').type("123")
        });
        cy.get("input[placeholder='Postcode / Zipcode']").type('12345');
        cy.contains('Purchase Tickets').click();
        cy.wait(10000)
    }

}