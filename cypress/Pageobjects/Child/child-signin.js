class childLogin {
  visit() {
    cy.visit("https://tarbiyat.graphicweave.com/sign-in/");
  }

  getErrorMessage() {
    cy.get(".toaster__title").should("have.text", "Invalid credentials");
  }

  LoginElements = {
    clickchild: () => cy.contains("Learner"),
    continuewithEmail: () => cy.get('button[tabindex="0"]').contains("Continue with email"),
    Emailaddress: () => cy.get('input[name="email"]'),
    Password: () => cy.get('input[name="password"]'),
    Signinbtn: () => cy.get('button[type="submit"]'),
  };

  signinChild(email, pssd) {
    this.LoginElements.clickchild().click();
    this.LoginElements.continuewithEmail().click();
    this.LoginElements.Emailaddress().type(email);
    this.LoginElements.Password().type(pssd);
    this.LoginElements.Signinbtn().click();
  }

  logout(){
    cy.get('.MuiAvatar-root').click();
    cy.contains('Logout').click()
    cy.wait(2000)
}

  }


export default childLogin;
