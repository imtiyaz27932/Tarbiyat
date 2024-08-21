class instLogin {
    visit() {
      cy.visit("https://tarbiyat.graphicweave.com/sign-in/");
    }
  
    getErrorMessage() {
      cy.get(".toaster__title").should("have.text", "Invalid credentials");
    }
  
    LoginElements = {
      instclick: () => cy.contains("Instructor"),
      continuewithEmail: () => cy.get('button[tabindex="0"]').contains("Continue with email"),
      Emailaddress: () => cy.get('input[name="email"]'),
      Password: () => cy.get('input[name="password"]'),
      Signinbtn: () => cy.get('button[type="submit"]'),
    };
  
    signininst(email, pssd) {
      this.LoginElements.instclick().click();
      this.LoginElements.continuewithEmail().click();
      this.LoginElements.Emailaddress().type(email);
      this.LoginElements.Password().type(pssd);
      this.LoginElements.Signinbtn().click();
    }
}
export default instLogin;