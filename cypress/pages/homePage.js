class HomePage {
    openPage() {
      cy.visit('https://www.zenithbank.com/');
      return this;
    }
   
    navigateToCurrentAccountPage(){
        this.agreeToTermsAndPolicy();
        cy.navigateToCurrentAccountPage()
        return this;
    }

    agreeToTermsAndPolicy(){
        cy.acceptCookies();
    }
  }
  
  export default new HomePage();