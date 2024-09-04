class childauth{
    visit() {
        cy.visit("https://tarbiyat.graphicweave.com/sign-in/");
      }

      getErrorMessage() {
        cy.get('.toaster__title').should('have.text','Email already exists')
     }
    

    ChildElements ={
        createanAccount: () => cy.get(".MuiTypography-subtitle2"),
        clickchild:()=> cy.contains('Learner'),
        continuewithEmail: () => cy.get('button[tabindex="0"]').contains("Continue with email"),
        Firstname: () => cy.get('input[name="firstName"]'),
        Lastname: () => cy.get('input[name="lastName"]'),
        Emailaddress: () => cy.get('input[name="email"]'),
        Password: () => cy.get('input[name="password"]'),
        Signupbtn: () => cy.get('button[type="submit"]'),
    }


    signupChild(fname,lname,mail,pwd){

        this.ChildElements.createanAccount().click()
        this.ChildElements.clickchild().click()
        this.ChildElements.continuewithEmail().click()
        this.ChildElements.Firstname().type(fname)
        this.ChildElements.Lastname().type(lname)
        this.ChildElements.Emailaddress().type(mail)
        this.ChildElements.Password().type(pwd)
        this.ChildElements.Signupbtn().click()
    }


}
export default childauth;