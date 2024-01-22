/// <reference types="cypress" />

import HomePage from "../../pages/HomePage";
import currentAccountPage from "../../pages/currentAccountPage";


describe('Zenith Bank Individual Current Account Test', () => {
  
  beforeEach(() => {
    cy.clearCookies();
    HomePage.openPage()
            .navigateToCurrentAccountPage()
  })

  it('Should validate features of Individual Current Account', () => {
    const expectedFeatures = [
      "Zero account opening balance",
      "Internet Banking",
      "Zenith Mobile Banking app",
      "*966# Eazybanking",
      "MasterCard/Visa/Verve debit card",
      "Email/SMS Alertz",
      "Cheque book"
    ];

    cy.wait(200)
    currentAccountPage.expandFeatures();
    cy.get("#ui-id-2")
    .find("ul").as("features-container")
    cy.get("@features-container").find('li').should("have.length",7);
    cy.get("@features-container").find('li')
    .each(($li, index) => {
      cy.wrap($li).should("have.text", expectedFeatures[index]);
    });
  })

  it.only('Should validate requirements of Individual Current Account', () => {
    const expectedRecommendations = [
      "Account opening form duly completed",
      "One recent clear passport photograph of signatory",
      "Identification of signatories (Driver’s License, International Passport, National Identity Card or Voter’s Card)",
      "Residence permit (where applicable)",
      "Two independent and satisfactory references",
      "Public Utility Receipt dated within the last three months (PHCN bill, water rate bill, tenement rate, rent receipt, telephone bill)" 
];

    cy.wait(200)
    currentAccountPage.expandRecommendations();
    cy.get("#ui-id-4")
    .find("ul").as("recommendations-container")
    cy.get("@recommendations-container").find('li').should("have.length",6);
    cy.get("@recommendations-container").find('li')
    .each(($li, index) => {
      cy.wrap($li).should("have.text", expectedRecommendations[index]);
    });
  })

  it('Should validate available channels of Individual Current Account', () => {
    const expectedChannels = [
      "*966# EazyBanking",
      "Zenith Internet Banking",
      "In-branch at any Zenith Bank branch",
      "ZenithDirect – our 24/7 telephone banking",
      "Zenith Bank ATM nation-wide – free cash withdrawal",
      "Zenith Mobile Banking App – 24/7 on your smart phone",
      "Access your account using your Zenith Bank debit card at participating merchant stores for payment of goods and services in Nigeria and anywhere in the world"
    ];

    cy.wait(200)
    currentAccountPage.expandAvailableChannels();
    cy.get("#ui-id-6")
    .find("ul").as("available-channels-container")
    cy.get("@available-channels-container").find('li').should("have.length",7);
    cy.get("@available-channels-container").find('li')
    .each(($li, index) => {
      cy.wrap($li).should("have.text", expectedChannels[index]);
    });
  })
})