// ***********************************************
// create custom commands here and overwrite

Cypress.Commands.add('navigateToCurrentAccountPage', () => {
    cy.get(".menu-bars-link").should("be.visible").click({force: true});
    cy.get(".menu-item-1162").first().click(); 
    cy.get(".menu-item-1154").first().click();
    cy.get(".menu-item-1640").first().contains("Current Account").click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/personal-banking/bank-accounts/current-account/')
    })
  })

  Cypress.Commands.add('acceptCookies', () => {
    cy.get("#cookie-modal").should("be.visible");
    cy.get("#continue-button").click();
     cy.get("#cookie-modal").should("not.be.visible");
  })


 
