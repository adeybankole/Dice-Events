//For File Import
import 'cypress-file-upload';

//For File Download
require('cypress-downloadfile/lib/downloadFileCommand');

//For handling iFrames
Cypress.Commands.add('getIframe', (iframe) => {
    return cy.get(iframe).eq(0)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
})

//For Cypress drag and drop plugin
require('@4tw/cypress-drag-drop')