export class mioLogin {

    visitLoginPage() {
        cy.visit("https://mio-aqa-candidates.dc.dice.fm/auth/login");
    }
    inputLogindetails(username, password) {
        cy.get("input[name='email']").type(username);
        cy.get("input[name='password']").type(password);
    }
    clickOnLogin() {
        cy.get(".Form__FormWrapper-sc-12vprvu-0.fTIsDq div:nth-child(4) .button_container").click();
        cy.wait(5000);
    }
}