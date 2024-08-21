class signin {
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

  getSuccessMessage(){
    cy.get('.toaster__title').should("have.text",'Children added successfully!')
  }

  AddchildElements = {
    Addchildbtn: () => cy.get('button[type="button"]').contains("Add Child"),
    createonebtn: () => cy.contains("button", "Create One"),
    Fname:() => cy.get('input[name="firstName"]'),
    Lname: () => cy.get('input[name="lastName"]'),
    mailid: () => cy.get('input[name="email"]'),
    Pass: () => cy.get('input[name="password"]'),
    createaccount: () => cy.get('button[type="submit"]'),
  };

  Addchild(name, lastName, email, password) {
    this.AddchildElements.Addchildbtn().click();
    cy.contains("label", "No").find('input[type="checkbox"]').check();
    this.AddchildElements.createonebtn().click();
    this.AddchildElements.Fname().type(name);  // type first name
    this.AddchildElements.Lname().type(lastName);  // type last name
    this.AddchildElements.mailid().type(email);  // type email
    this.AddchildElements.Pass().type(password);  // type password
    this.AddchildElements.createaccount().click();
}

logout(){
    cy.get('.MuiAvatar-root').click();
    cy.contains('Logout').click()
    cy.wait(2000)
}

}
export default signin;
