class ParentSignup {
  visit() {
    cy.visit("https://tarbiyat.graphicweave.com/sign-in/");
  }


  getErrorMessage() {
    cy.get('.toaster__title').should('have.text','Email already exists')
 }


  Signupelements = {
    createanAccount: () => cy.get(".MuiTypography-subtitle2"),
    continuewithEmail: () => cy.get('button[tabindex="0"]').contains("Continue with email"),
    Firstname: () => cy.get('input[name="firstName"]'),
    Lastname: () => cy.get('input[name="lastName"]'),
    Emailaddress: () => cy.get('input[name="email"]'),
    Password: () => cy.get('input[name="password"]'),
    Signupbtn: () => cy.get('button[type="submit"]'),
  };

  SignupParent(Fname, lname, email, psd) {
    this.Signupelements.createanAccount().click()
    this.Signupelements.continuewithEmail().click()
    this.Signupelements.Firstname().type(Fname);
    this.Signupelements.Lastname().type(lname);
    this.Signupelements.Emailaddress().type(email);
    this.Signupelements.Password().type(psd);
    this.Signupelements.Signupbtn().click();
   
  }
}
export default ParentSignup;
