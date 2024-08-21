class instSignup{
    visit() {
        cy.visit("https://tarbiyat.graphicweave.com/sign-in/");
      }


      getErrorMessage() {
        cy.get('.toaster__title').should('have.text','Email already exists')
     }



      Elements ={
        createanAccount: () => cy.get(".MuiTypography-subtitle2"),
        clickinst:()=> cy.contains('Instructor'),
        continuewithEmail: () => cy.get('button[tabindex="0"]').contains("Continue with email"),
        Firstname: () => cy.get('input[name="firstName"]'),
        Lastname: () => cy.get('input[name="lastName"]'),
        Emailaddress: () => cy.get('input[name="email"]'),
        Password: () => cy.get('input[name="password"]'),
        Signupbtn: () => cy.get('button[type="submit"]'),

      }

      instsignup(name,lname,mail,pswed){
        this.Elements.createanAccount().click()
        this.Elements.clickinst().click()
        this.Elements.continuewithEmail().click()
        this.Elements.Firstname().type(name)
        this.Elements.Lastname().type(lname)
        this.Elements.Emailaddress().type(mail)
        this.Elements.Password().type(pswed)
        this.Elements.Signupbtn().click()
      }
    }
export default instSignup;