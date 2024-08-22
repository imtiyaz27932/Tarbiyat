class createCourse {
    lessonNames = [
      "Introduction to Math",
      "Science Basics",
      "History of Art",
      "English Literature",
      "Basic Physics",
      "Chemistry 101",
      "Geography Insights",
      "World History",
      "Introduction to Programming",
      "Advanced Calculus",
    ];
  
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
      clickonupload: () => cy.get(".upload-placeholder"),
      uplodfile: () => cy.get('input[type="file"]'),
      createcoursebtn: () => cy.contains("button", "Create course"),
    };
  
    createcourse(cname, lang, desc, learn) {
      this.courseElements.cretecouresebtn().click();
      this.courseElements.coursename().type(cname);
      this.courseElements.categories().click();
      cy.get(".MuiAutocomplete-option").contains("programming").click();
      this.courseElements.skills().click();
      cy.get(".MuiAutocomplete-option").contains("programming").click();
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
  
    Content = {
      clickcoursecontent: () => cy.contains("span.mnl__nav__item__title", "Course Content"),
      addunit: () => cy.contains("span.mnl__nav__item__title", "Add Unit"),
      enterunitname: () => cy.get('input[placeholder="enter unit name"]'),
      clicktick: () => cy.get('svg[data-testid="CheckOutlinedIcon"]'),
      clickunit: (unitNumber) => cy.contains("span.mnl__nav__item__title", `Unit ${unitNumber}`),
      addlesson: () => cy.contains("button", "Add Lesson"),
      enterlessonname: () => cy.get('input[placeholder="Enter Lesson name"]'),
    };
  
    addUnit() {
      this.Content.clickcoursecontent().click();
      
      // Loop to create 10 units
      for (let i = 1; i <= 10; i++) {
        this.Content.addunit().click();
        this.Content.enterunitname().type(`Unit ${i}`);
        this.Content.clicktick().click();
      }
      
      // Loop to click on each unit, add a lesson, and save it
      for (let i = 1; i <= 10; i++) {
        this.Content.clickunit(i).click();
        this.Content.addlesson().click();
        this.Content.enterlessonname().click().type(this.lessonNames[i - 1]);
        this.Content.clicktick().click(); // Click on tick to save the lesson
      }
    }
  }
  
  export default createCourse;
  