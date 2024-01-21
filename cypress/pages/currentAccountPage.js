class CurrentAccountPage {

  getFeatures() {
    return cy.get('#ui-id-1');
  }

  getRecommendation() {
    return cy.get('#ui-id-3');
  }

  getAvailableChannels() {
    return cy.get('#ui-id-5');
  }

   expandFeatures(){
     this.getFeatures().click()
   }

   expandRecommendations(){
    this.getRecommendation().click()
  }
  expandAvailableChannels(){
    this.getAvailableChannels().click()
  }

}

export default new CurrentAccountPage();