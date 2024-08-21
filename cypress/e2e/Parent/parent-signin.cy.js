import signin from "../../Pageobjects/Parent/parentSigin";
const timestamp = Date.now();
const uniqueEmail = `user${timestamp}@example.com`;
const uniqueFirstName = generateUniqueName("Fname");
const uniqueLastName = generateUniqueName("Lname");

function generateUniqueName(baseName) {
  const timestamp = Date.now();
  return `${baseName}${timestamp}`;
}

describe("Parent Sigin Test Suit", () => {
  const log = new signin();
  let repodata;

  beforeEach(() => {
    cy.fixture("parent-data").then((testdata) => {
      repodata = testdata;
      log.visit();
    });
  });

  it("Parent Login Successfully", () => {
    log.Login(repodata.user.Email, repodata.user.Password); // Login with valid credentials
  });

  it("Parent login with invalid Credentials", () => {
    log.Login(repodata.user.invalidEmail, repodata.user.Password); // Login with invalid email
    log.getErrorMessage(); // Check for error message
  });

  it("Parent logout Fucntionality", () => {
    log.Login(repodata.user.Email, repodata.user.Password);
    log.logout();
  });

  it("Parent Adds child", () => {
    log.Login(repodata.user.Email, repodata.user.Password); // Login before adding a child
    log.Addchild(
      uniqueFirstName,
      uniqueLastName,
      uniqueEmail,
      repodata.user.Password
    );
    log.getSuccessMessage();
  });
});
