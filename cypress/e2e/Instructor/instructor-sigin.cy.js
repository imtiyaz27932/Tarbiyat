import instLogin from "../../Pageobjects/instructor/instructor-signin";

describe("Instructor Sigin Test Suit", () => {
  const instlog = new instLogin();
  let repodata;

  beforeEach(() => {
    cy.fixture("instructor-data").then((testdata) => {
      repodata = testdata;
      instlog.visit();
    });
  });

  it("Instructor Login successfully", () => {
    instlog.signininst(repodata.Email, repodata.Password);
  });
  it("Unsuccessful Login using invalid Credentials", () => {
    instlog.signininst(repodata.wrongcred, repodata.Password);
    instlog.getErrorMessage();
  });
});
