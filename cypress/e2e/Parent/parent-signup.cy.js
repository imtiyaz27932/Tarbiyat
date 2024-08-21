import ParentSignup from "../../Pageobjects/Parent/parentSignup";

const timestamp = Date.now();
const uniqueEmail = `user${timestamp}@example.com`;
describe("Parent Signup Test Suit", () => {
  const sgn = new ParentSignup();
  beforeEach(() => {
    sgn.visit();
  });

  it("Parent Registered successfully", () => {
    cy.fixture("parent-data").then((data) => {
      sgn.SignupParent(
        data.user.Firstname,
        data.user.Lastname,
        uniqueEmail,
        data.user.Password
      );
    });
  });

  it("Shows Error message if user is already registered", () => {
    cy.fixture("parent-data").then((data) => {
      sgn.SignupParent(
        data.user.Firstname,
        data.user.Lastname,
        data.user.Email,
        data.user.Password
      );
    });
  });
});
