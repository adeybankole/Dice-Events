export class Home {
    homePage() {
        cy.visit("https://aqa-candidates.dc.dice.fm/");
    }
    browseEvent(){
        cy.contains('Browse events').click()
    }
}