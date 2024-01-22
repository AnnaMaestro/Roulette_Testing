export class DepositPage {
  proceedWithRealMoney() {
    cy.get(".nav-button").eq(1).click({ force: true });
  }

  selectionOfRealMoney() {
    const selectCard = "MasterCard";
    cy.get(".card__name").contains(selectCard).click({ force: true });
    cy.get(".text-center")
      .eq(1)
      .should("be.visible")
      .invoke("text")
      .then((verifyTitle) => {
        cy.log(verifyTitle);
      });
    const makeSelectionOnModal = "ZEN";
    cy.get(".card__name").contains(makeSelectionOnModal).click({ force: true });
    cy.get(".btn-tertiary").eq(0).click({ force: true });
  }

  selectionOfTheRegion() {
    // const selectRegion = "Australia";
    cy.get(".region-picker").eq(1).click({ force: true });
    // cy.get('select').contains(selectRegion).click()
  }
  verifyTheText() {
    cy.get(".text-light-1")
      .eq(1)
      .should("be.visible")
      .invoke("text")
      .then((logo) => {
        cy.log(logo);
      });

    cy.get(".text-light-1")
      .eq(2)
      .should("be.visible")
      .invoke("text")
      .then((logo1) => {
        cy.log(logo1);
      });
  }

  logoRedirection() {
    cy.get('[rel="nonoopener"]')
      .eq(0)
      .should("be.visible")
      .invoke("removeAttr", "target")
      .click();
  }
  accessToDiscord() {
    cy.get(".pr-md").eq(0).invoke("removeAttr", "target").click();
  }

  accessToTwitter() {
    cy.get(".pr-md")
      .eq(1)
      .should(".be.visible")
      .invoke("removeAttr", "target")
      .click();
  }

  accessToInstagram() {
    cy.get(".pr-md")
      .eq(2)
      .should(".be.visible")
      .invoke("removeAttr", "target")
      .click();
  }

  accessToFacebook() {
    cy.get(".pr-md")
      .eq(3)
      .should(".be.visible")
      .invoke("removeAttr", "target")
      .click();
  }

  redirectionToAboutPage() {
    cy.get(".pb-sm").contains("About").click();
  }

  redirectionToCareersPage() {
    cy.get(".py-sm").contains("Careers").click();
    cy.wait(5000);
  }
  redirectionToFairnessPage() {
    cy.get(".py-sm").contains("Fairness").click();
  }
  redirectionToPrivacyPolicyPage() {
    cy.get(".py-sm").contains("Privacy Policy").click();
  }
  redirectionToTermsOfServicePage() {
    cy.get(".py-sm").contains("Terms of Service").click();
  }
  redirectionToOfficialMirrorListPage() {
    cy.get(".pt-sm").contains("Official Mirror list").click();
  }
}

export const toDepositPage = new DepositPage();
