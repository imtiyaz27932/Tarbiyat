import childLogin from "../../Pageobjects/Child/child-signin";

describe("Learner Sigin Test Suit", () => {
  const childlog = new childLogin();
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

  it("Child login with Invalid Credentilas",()=> {
    childlog.signinChild(repodata.invalidemail, repodata.Password)
    childlog.getErrorMessage()
  })

  it("Logout Functionality",()=>{
    childlog.signinChild(repodata.Email, repodata.Password);
    childlog.logout()
  })
});
