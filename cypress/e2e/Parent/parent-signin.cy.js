import Signin from "../../Pageobjects/Parent/parentSigin";

const timestamp = Date.now();
const uniqueEmail = `user${timestamp}@example.com`;
const uniqueFirstName = generateUniqueName("Fname");
const uniqueLastName = generateUniqueName("Lname");

function generateUniqueName(baseName) {
  return `${baseName}${Date.now()}`;
}

describe("Parent Sign In Test Suite", () => {
  const log = new Signin();
  let repodata;
  let tdata;

  beforeEach(() => {
    // Load fixture data
    cy.fixture("parent-data").then((testdata) => {
      repodata = testdata;
    });

    cy.fixture("teachers").then((testdata) => {
      tdata = testdata;
    });

    // Visit the login page
    log.visit();
  });

  it("Parent Login Successfully", () => {
    log.Login(repodata.user.Email, repodata.user.Password); // Login with valid credentials
  });

  it("Parent login with invalid Credentials", () => {
    log.Login(repodata.user.invalidEmail, repodata.user.Password); // Login with invalid email
    log.getErrorMessage(); // Check for error message
  });

  it("Parent logout Functionality", () => {
    log.Login(repodata.user.Email, repodata.user.Password);
    log.logout();
  });

  it("Parent Adds Child", () => {
    log.Login(repodata.user.Email, repodata.user.Password); // Login before adding a child
    log.Addchild(
      uniqueFirstName,
      uniqueLastName,
      uniqueEmail,
      repodata.user.Password
    );
    log.getSuccessMessage();
    log.Assignchild();
    tdata.emailss.forEach(emails => {
      log.AssignTeacher(emails);
    });
  });
});
