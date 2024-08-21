import instSignup from "../../Pageobjects/instructor/instructor-signup";
const timestamp = Date.now();
const uniqueEmail = `user${timestamp}@example.com`;

describe("Instructor Signup Test Suit", () => {
  const inst = new instSignup();
  let repodata;

  beforeEach(() => {
    cy.fixture("instructor-data").then((testdata) => {
      repodata = testdata;
      inst.visit();
    });
  });
  it("Instructor Successfull Registeration", () => {
    inst.instsignup(
      repodata.FirstName,
      repodata.LastName,
      uniqueEmail,
      repodata.Password
    );
  });

  it("Registeration Failed due to Exiting email Address", () => {
    inst.instsignup(repodata.FirstName, repodata.LastName, repodata.invalidemail, repodata.Password)
    inst.getErrorMessage()
  });
});
