import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import { mioLogin } from "../../pages/mioPages/mio_login";
import { mioDashboard } from "../../pages/mioPages/dashbaord";
import { eventForm } from "../../pages/mioPages/Event_form";
import { reviewEvent } from "../../pages/mioPages/review_event";
import { finalEventScreen } from "../../pages/mioPages/final_event";
import { Home } from "../../pages/dice_pages/home";
import { eventList } from "../../pages/dice_pages/events_list";
import { eventDetails } from "../../pages/dice_pages/event_details";
import { ticketDetails } from "../../pages/dice_pages/ticket_details";
import { Verification } from "../../pages/dice_pages/verification";
import { Payment } from "../../pages/dice_pages/payment";
import { SuccessPage } from "../../pages/dice_pages/success_page";

const miologin = new mioLogin();
const miodashboard = new mioDashboard()
const eventform = new eventForm()
const reviewevent = new reviewEvent()
const finaleventscreen = new finalEventScreen()
const home = new Home()
const eventlist = new eventList()
const eventdetails = new eventDetails()
const ticketdetails = new ticketDetails()
const verification = new Verification()
const payment = new Payment()
const successpage = new SuccessPage()

Given('User is at the login page', () => {
    miologin.visitLoginPage()
});

When('User enters username as {string} and password as {string}', (username, password) => {
    miologin.inputLogindetails(username, password)
});

And('User clicks on login button', () => {
    miologin.clickOnLogin()
});

And('User is able to successfully login to the Website', () => {
    miodashboard.verifyDashboard()
});

And('User click on the create event', () => {
    miodashboard.clickCreateEvent()
});

And('User fill the basic form', () => {
    eventform.fillBasicForm()
});

And('User fill the Timeline form', () => {
    eventform.fillTimelineForm()
});

Then('User fill the information section', () => {
    eventform.fillInformationForm()
});

Then('User fill the Tickets section', () => {
    eventform.fillTicketForm()
});

Then('User has created the event', () => {
    eventform.saveEvent()
});

Then('User review the event details', () => {
    reviewevent.previewDetails()
});

Then('User successfully make the Event live', () => {
    finaleventscreen.successScreen()
});

///////////////////---------------/////////////////////////

Given('User is at the home page', () => {
    home.homePage()
    home.browseEvent()
});

When('User searches for the desired event', () => {
    eventlist.searchEvent()
});

And('User clicks on Buy now button', () => {
    eventdetails.buyNow()
});
And('User selects the second ticket', () => {
    ticketdetails.selectSecondTicket()
});
And('User verify the Phone number and OTP', () => {
    verification.phoneOtpVerification()
});
And('user enter the card details', () => {
    payment.cardPayment()
});
Then('User successfully buy the ticket', () => {
    successpage.successMessage()
});