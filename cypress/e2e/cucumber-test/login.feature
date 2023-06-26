Feature: Event Creation and Event Booking feature testing

    Scenario Outline: Creating an event on MIO Website

          Given User is at the login page
          When User enters username as '<email>' and password as '<password>'
          And User clicks on login button
          And User is able to successfully login to the Website
          And User click on the create event
          And User fill the basic form
          And User fill the Timeline form
          Then User fill the information section
          Then User fill the Tickets section
          Then User has created the event
          Then User review the event details
          Then User successfully make the Event live
         Examples:
            | email | password |
            | client_admin_auto@dice.fm    | musicforever |

    Scenario: Booking tickets for the event

        Given User is at the home page
        When User searches for the desired event
        And User clicks on Buy now button
        And User selects the second ticket
        And User verify the Phone number and OTP
        And user enter the card details
        Then User successfully buy the ticket
