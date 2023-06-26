import { ticketModal } from "./ticket_modal"

const ticketmodal = new ticketModal()

export class eventForm {

    fillBasicForm() {
        cy.get("input[name='name']").type('Test Event 212')
        cy.get("input#genres").type('deep house', { force: true })
        cy.wait(3000)
        cy.get("input#genres").type('{enter}')
        cy.get("input#primaryVenue").type("dice", { force: true })
        cy.wait(3000)
        cy.get("input#primaryVenue").type('{enter}')
    }
    fillTimelineForm() {
        // Calculate the announceDate (3 days before current date)
        const currentDate = new Date();
        const threeDaysAgo = new Date();
        threeDaysAgo.setDate(currentDate.getDate() - 3);
        const formattedAnnounceDate = threeDaysAgo.toISOString().split('T')[0];

        // Calculate on-sale and off-sale dates
        const onSaleDate = new Date();
        onSaleDate.setDate(currentDate.getDate() - 2); // Set on-sale date 2 days ago
        const offSaleDate = new Date();
        offSaleDate.setDate(currentDate.getDate() + 5); // Set off-sale date 5 days from now

        // Calculate event start and end dates
        const eventStartDate = new Date();
        eventStartDate.setDate(currentDate.getDate() + 2); // Set event start date 2 days after off-sale date
        const eventEndDate = new Date();
        eventEndDate.setDate(eventStartDate.getDate() + 5); // Set event end date 5 days after event start date

        // Generate random time for lineup details (doors open)
        const lineupTime = '9:00 PM'; // Replace with your desired logic to generate a random time

        // Fill the form fields
        cy.get('input[name="announceDate"]').type(formattedAnnounceDate);
        cy.get('input[name="onSaleDate"]').type(onSaleDate.toISOString().split('T')[0]);
        cy.get('input[name="offSaleDate"]').type(offSaleDate.toISOString().split('T')[0]);
        cy.get('input[name="date"]').type(eventStartDate.toISOString().split('T')[0]);
        cy.get('input[name="endDate"]').type(eventEndDate.toISOString().split('T')[0]);
        cy.get('input[name="lineup[0].time"]').type(lineupTime, { force: true });
        cy.get('input[name="lineup[0].time"]').type('{enter}');
    }
    fillInformationForm() {
        cy.get("input[type='file']").attachFile('pic1.jpg');
        cy.wait(5000)

        // Write "This is the description" in the Description Field
        const description = 'This is the description';
        cy.get('div[data-name="description"] div[data-block="true"]').clear()
        cy.get('div[data-name="description"] div[data-block="true"]').type(description);

        // Write "This is an 18+ event" in Age Limit Field
        const ageLimit = 'This is an 18+ event';
        cy.get('input[name="ageLimit"]').clear()
        cy.get('input[name="ageLimit"]').type(ageLimit);
    }
    fillTicketForm() {
        cy.get('.EmptyState__Content-sc-1npwjoh-1 .button_content').click();
        ticketmodal.firstTicket()
        ticketmodal.secondTicket()
    }
    saveEvent(){
        cy.get("button[type='submit']").click()
        cy.wait(10000)
    }

}