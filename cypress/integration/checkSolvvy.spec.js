/// <reference types="cypress" />
import SolvvyHelp from "../support/pageObjects/SolvvyHelp.js";

describe("List of org's and checking the presence of solvvy ", () => {
  var globalData;
  before(function () {
    // runs once before all tests in the block
    cy.fixture("example").then(function (data) {
      globalData = data;
    });

    // Cypress.Cookies.defaults({
    //   preserve: 'session_id',
    // })
  });

  // it('Hitting the link', () => {
  //   const solvvyHelp = new SolvvyHelp();
  //   cy.visit('https://ring.com/');
  //   cy.scrollTo('bottom');
  //   cy.get('.consent--accept').click();
  //   cy.get('#solvvy-ring-launcher-button').click({force: true});
  //   cy.get('.main-content').should('be.visible');
  // })

  it("Ring Us Engage", () => {
    const solvvyHelp = new SolvvyHelp();
    cy.visit(globalData.org1.url);
    cy.scrollTo("bottom");
    solvvyHelp.getRingConsentAcceptSolvvy().click();
    solvvyHelp.getRingUsEngageSolvvy().click({ force: true });
    solvvyHelp.getMaincontent().should("be.visible");
  });

  it("Kiwico", () => {
    const solvvyHelp = new SolvvyHelp();
    cy.visit(globalData.org2.url);
    solvvyHelp.getKiwicoSolvvy().click();
    solvvyHelp.getMaincontent().should("be.visible");
  });
});
