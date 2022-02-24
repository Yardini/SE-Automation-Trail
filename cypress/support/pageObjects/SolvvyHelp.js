class SolvvyHelp {
  //Main solvvy content
  getMaincontent() {
    return cy.get(".main-content");
  }
  //Ring Us Engage

  getRingConsentAcceptSolvvy() {
    return cy.get(".consent--accept");
  }
  
  getRingUsEngageSolvvy() {
    return cy.get("#solvvy-ring-launcher-button");
  }



  //kiwico
  getKiwicoSolvvy() {
    return cy.get(".solvvy-v5-widget");
  }

  // getTwoWayDataBinding()
  // {
  //     return cy.get(':nth-child(4) > .ng-untouched')

  // }
  // getGender()
  // {
  //   return  cy.get('select')
  // }

  // getEntrepreneaur()
  // {
  //    return cy.get('#inlineRadio3')
  // }
  // getShopTab()
  // {
  //     return  cy.get(':nth-child(2) > .nav-link')
  // }
}

export default SolvvyHelp;
