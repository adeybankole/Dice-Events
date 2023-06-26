export class SuccessPage {
    successMessage() {
        cy.get('h1.ConfirmationCard__Title-sc-5rszri-2.kqRyzk')
            .invoke('text')
            .then((text) => {
                const expectedTextPart = 'The ticket is';
                expect(text.includes(expectedTextPart)).to.be.true;
            });
    }

}