import { toDepositPage } from "../support/Page_Objects/Deposit";

describe("Navigations", () => {
  beforeEach("Open Application", () => {
    cy.visit("https://csgoempire.com/roulette");
  });
  it("Navigate to the Deposit page", () => {
    toDepositPage.proceedWithRealMoney();
    toDepositPage.selectionOfRealMoney();
    toDepositPage.selectionOfTheRegion();
    toDepositPage.verifyTheText();
    toDepositPage.logoRedirection();
    // toDepositPage.accessToDiscord()
    // toDepositPage.accessToTwitter()
    // toDepositPage.accessToInstagram()
    // toDepositPage.accessToFacebook()
    // toDepositPage.redirectionToAboutPage()
    //toDepositPage.redirectionToCareersPage()
    // toDepositPage.redirectionToFairnessPage()
    // toDepositPage.redirectionToPrivacyPolicyPage()
    // toDepositPage.redirectionToTermsOfServicePage()
    //toDepositPage.redirectionToOfficialMirrorListPage()
  });
});
