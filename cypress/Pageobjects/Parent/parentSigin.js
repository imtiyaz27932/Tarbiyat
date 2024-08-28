class Signin {
  visit() {
    cy.visit("https://tarbiyat.graphicweave.com/sign-in/");
  }

  loginElements = {
    clickonParent: () => cy.get(".Mui-selected"),
    continuewithEmail: () =>
      cy.get('button[tabindex="0"]').contains("Continue with email"),
    Emailaddress: () => cy.get('input[name="email"]'),
    Password: () => cy.get('input[name="password"]'),
    Signinbtn: () => cy.get('button[type="submit"]'),
  };

  Login(mail, psd) {
    this.loginElements.clickonParent().click();
    this.loginElements.continuewithEmail().click();
    this.loginElements.Emailaddress().type(mail);
    this.loginElements.Password().type(psd);
    this.loginElements.Signinbtn().click();
  }

  getErrorMessage() {
    cy.get(".toaster__title").should("have.text", "Invalid credentials");
  }

  getSuccessMessage() {
    cy.get(".toaster__title").should(
      "have.text",
      "Children added successfully!"
    );
  }

  AddchildElements = {
    Addchildbtn: () => cy.get('button[type="button"]').contains("Add Child"),
    createonebtn: () => cy.contains("button", "Create One"),
    Fname: () => cy.get('input[name="firstName"]'),
    Lname: () => cy.get('input[name="lastName"]'),
    mailid: () => cy.get('input[name="email"]'),
    Pass: () => cy.get('input[name="password"]'),
    createaccount: () => cy.get('button[type="submit"]'),
  };

  Addchild(name, lastName, email, password) {
    this.AddchildElements.Addchildbtn().click();
    cy.contains("label", "No").find('input[type="checkbox"]').check();
    this.AddchildElements.createonebtn().click();
    this.AddchildElements.Fname().type(name); // type first name
    this.AddchildElements.Lname().type(lastName); // type last name
    this.AddchildElements.mailid().type(email); // type email
    this.AddchildElements.Pass().type(password); // type password
    this.AddchildElements.createaccount().click();
  }

  Assignelements = {
    clickviewprofile: () => cy.contains("View Profile"),
    clickoncourse: () => cy.get(".mnl__nav__item"),
    selectpagination: () => cy.get(".MuiTablePagination-select"),
    clickdropdwns: () => cy.get("li"),
  };

  Assignchild() {
    this.Assignelements.clickviewprofile().click();
    cy.wait(3000); // Wait for the profile view to load

    this.Assignelements.clickoncourse().click({ multiple: true });
    cy.wait(3000); // Wait for the courses to be displayed

    cy.contains("Courses").click();
    cy.wait(3000); // Wait for the course page to load

    this.Assignelements.selectpagination().click();
    cy.wait(2000);
    this.Assignelements.clickdropdwns().contains("25").click();
    cy.wait(5000);
    cy.scrollTo("bottom");
    cy.wait(2000);
    cy.scrollTo("top");

    cy.get("button") // Select all button elements
      .contains("Assign") // Filter for buttons with "Assign" text
      .then(($buttons) => {
        // Ensure all buttons are in the viewport
        Cypress._.each($buttons, (btn) => {
          cy.wrap(btn).scrollIntoView();
        });

        // Click all visible "Assign" buttons
        Cypress._.each($buttons, (btn) => {
          cy.wrap(btn).click();
          cy.wait(500);
        });
      });
  }

  teacherelements = {
    clickonteachers: () => cy.contains("Teachers"),
    typeemail: () => cy.get('input[name="email"]'),
  };

  AssignTeacher(test) {
    this.teacherelements.clickonteachers().click();
    this.teacherelements.typeemail().type(test);
    cy.contains("Link a Teacher").click();
    cy.wait(3000);
  }

  logout() {
    cy.get(".MuiAvatar-root").click();
    cy.contains("Logout").click();
    cy.wait(2000);
  }
}

export default Signin;
