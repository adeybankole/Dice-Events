export class eventList {
    searchEvent() {
        const desiredText = "Test Event 212";

        function clickOnDesiredTextOrLoadMore() {
            cy.get('.EventCard__Event-sc-95ckmb-1')
                .filter((index, element) => {
                    const childText = Cypress.$(element).find('.styles__Title-mwubo3-6').text();
                    return childText === desiredText;
                })
                .then((foundElements) => {
                    if (foundElements.length > 0) {
                        // Desired text found, click on any one of the elements
                        const randomIndex = Math.floor(Math.random() * foundElements.length);
                        cy.wrap(foundElements[randomIndex]).click();
                        cy.wait(7000)
                    } else {
                        // Desired text not found, click on "Load more" button if available
                        cy.contains("Load more").click();

                        // Check if new elements are loaded
                        cy.get('.EventCard__Event-sc-95ckmb-1').then((newElements) => {
                            if (newElements.length > 0) {
                                // Recursive call to continue searching
                                clickOnDesiredTextOrLoadMore();
                            }
                        });
                    }
                });
        }

        clickOnDesiredTextOrLoadMore();
    }
}