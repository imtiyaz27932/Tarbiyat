import childLogin from "../../Pageobjects/Child/child-signin";
import Review from "../../Pageobjects/Child/submitReview";
import { faker } from "@faker-js/faker";

describe("Learner Sigin Test Suit", () => {
  const childlog = new childLogin();
  const Rev = new Review();
  let repodata;

  beforeEach(() => {
    cy.fixture("child-data").then((testdata) => {
      repodata = testdata;
      childlog.visit();
    });
  });

  it("Child Login successfully", () => {
    childlog.signinChild(repodata.Email, repodata.Password);
  });

  it("Child login with Invalid Credentilas", () => {
    childlog.signinChild(repodata.invalidemail, repodata.Password);
    childlog.getErrorMessage();
  });

  it("Child Submits Review", () => {
    childlog.signinChild(repodata.Email, repodata.Password);
    const randomReview = faker.lorem.sentence();
    Rev.SubmitReview(randomReview);
  });

  it("Logout Functionality", () => {
    childlog.signinChild(repodata.Email, repodata.Password);
    childlog.logout();
  });
});
