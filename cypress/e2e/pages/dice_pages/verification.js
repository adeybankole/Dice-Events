export class Verification {
    phoneOtpVerification() {
        cy.get("button.PhoneField__SelectedButton-sc-1i75a8x-1").click()
        cy.get('input[placeholder="Search"]').type('+44');
        cy.get('div.PhoneField__List-sc-1i75a8x-5')
            .find('div.PhoneField__ListItem-sc-1i75a8x-6')
            .first()
            .click();
        cy.get("input[placeholder='Mobile number']").type('7455227865')
        cy.contains('Continue').click()
        cy.wait(2000)
        cy.get(".CodeInput__Input-pxula4-2.BTrnq").type("0000")
        cy.wait(15000)
    }

}