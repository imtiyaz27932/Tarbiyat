class createCourse {
  courseElements = {
    cretecouresebtn: () => cy.contains("Create course"),
    coursename: () => cy.get('input[name="name"]'),
    categories: () => cy.get('input[placeholder="+ Categories"]'),
    skills: () => cy.get('input[placeholder="+ Skills"]'),
    language: () => cy.get('input[name="language"]'),
    description: () => cy.get('p[data-placeholder="Description"]'),
    whatwilllearn: () => cy.get('p[data-placeholder="What you will learn"]'),
    difficultylevel: () => cy.get(".MuiToggleButtonGroup-firstButton"),
    instructors: () => cy.get("#rhf-autocomplete-instructors"),
    clickonupload:()=> cy.get(".upload-placeholder"),
    uplodfile:()=> cy.get('input[type="file"]'),
    createcoursebtn: () => cy.contains("button", "Create course"),
  };

  createcourse(cname, lang, desc, learn) {
    this.courseElements.cretecouresebtn().click();
    this.courseElements.coursename().type(cname);
    this.courseElements.categories().click();
    cy.get(".MuiAutocomplete-option").contains("programming").click();
    this.courseElements.skills().click();
    cy.get(".MuiAutocomplete-option").contains("programming") .click();
    this.courseElements.language().type(lang);
    this.courseElements.description().click().type(desc);
    this.courseElements.whatwilllearn().click().type(learn);
    this.courseElements.difficultylevel().click();
    this.courseElements.instructors().click();
    cy.get(".MuiAutocomplete-option").contains("Anees").click();
    this.courseElements.clickonupload().click();
    this.courseElements.uplodfile().attachFile("51767839.jpg");
    this.courseElements.createcoursebtn().click();
  }
}
export default createCourse;
