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
    cy.get(".MuiAutocomplete-option").contains("Health & Medicine").click();
    this.courseElements.skills().click();
    cy.get(".MuiAutocomplete-option").contains("Database Management").click();
    this.courseElements.language().type(lang);
    this.courseElements.description().click().type(desc);
    this.courseElements.whatwilllearn().click().type(learn);
    this.courseElements.difficultylevel().click();
    this.courseElements.instructors().click();
    cy.get(".MuiAutocomplete-option").contains("Noweed").click();
    this.courseElements.clickonupload().click();
    this.courseElements.uplodfile().attachFile("mui-cover.png");
    this.courseElements.createcoursebtn().click();
  }

  Content = {
    clickcoursecontent: () =>
      cy.contains("span.mnl__nav__item__title", "Course Content"),
    addunit: () => cy.contains("span.mnl__nav__item__title", "Add Unit"),
    enterunitname: () => cy.get('input[placeholder="enter unit name"]'),
    clicktick: () => cy.get('svg[data-testid="CheckOutlinedIcon"]'),
    clickunit: (unitNumber) =>
      cy.contains("span.mnl__nav__item__title", `Unit ${unitNumber}`),
    addlesson: () => cy.contains("button", "Add Lesson"),
    enterlessonname: () => cy.get('input[placeholder="Enter Lesson name"]'),
  };

  lessoncontent = {
    clickonlesson: () => cy.get(".MuiAccordionSummary-root"),
    addTextItemBtn: () =>
      cy.get(".MuiButton-root.MuiButton-outlined").contains("Add Text Item"),
    lessonitemname: () => cy.get('input[name="name"]'),
    writesomething: () => cy.get("div.tiptap.ProseMirror"),
    Duration: () => cy.get('input[placeholder="Duration"]'),
    unit: () => cy.get('[role="combobox"][aria-haspopup="listbox"]').click(),
    additembtn: () => cy.contains("button", "Add Item"),
    moreBtn: () => cy.get(".MuiButton-root.MuiButton-text").contains("More"),
    videourl: () => cy.contains("Video Url"),
    vidourllink: () => cy.get('input[name="url"]'),
    videoitem: () =>
      cy.get(".MuiButton-root.MuiButton-outlined").contains("Add Video Item"),
    uplodfile: () => cy.get('input[type="file"]'),
    mdfile: () => cy.contains("MD File"),
  };

  Assessmentcontent = {
    Assment: () =>
      cy
        .get(".MuiList-root.MuiList-padding.MuiMenu-list.css-r8u8y9")
        .contains("Assessment"),
    Name: () => cy.get('input[name="title"]'),
    asstdesciption: () => cy.get('input[name="description"]'),
    savechangebtn: () => cy.contains("button", "Save Changes"),
    addquestion: () => cy.contains("button", "Add question"),
  };

  Quiz = {
    Addpoint: () => cy.get('input[name="points"]'),
    addtime: () => cy.get('input[placeholder="Total minutes"]'),
    typequestion: () => cy.get('textarea[name="question"]'),
    ans1: () => cy.get(".MuiStack-root").find(".MuiFormControl-root").eq(0),
    //ans2: () => cy.get(".MuiStack-root").eq(1).find(".MuiFormControl-root"),
    addquestionbtn: () => cy.contains("Add Question"),
  };

  Assignmentelements = {
    Clickondpdwn: () => cy.get(".MuiSelect-select").eq(0),
    clickonaddquestion: () => cy.contains("Add Question"),
  };

  Descriptiveelemnts = {
    addnewquestion: () => cy.contains("button", "Add new question"),
    addpoints: () =>cy.get('form').eq(1).find('input[name="points"]'),
    addtimes:()=>cy.get('form').eq(1).find('input[name="time"]'),
    typequery:()=> cy.get('form').eq(1).find('textarea[name="question"]'),
    Descans: () => cy.get('textarea[name="expectedAnswer"]'),
  };

  addUnit() {
    this.Content.clickcoursecontent().click();

    // Loop to create 10 units
    for (let i = 1; i <= 1; i++) {
      this.Content.addunit().click();
      this.Content.enterunitname().type(`Unit ${i}`);
      this.Content.clicktick().click();
    }

    // Loop to click on each unit, add a lesson, and save it
    for (let i = 1; i <= 1; i++) {
      this.Content.clickunit(i).click();
      cy.wait(2000);
      this.Content.addlesson().click();
      cy.wait(2000);
      this.Content.enterlessonname()
        .click()
        .type(this.lessonNames[i - 1]);
      cy.wait(2000);
      this.Content.clicktick()
        .should("be.visible")
        .should("not.be.disabled")
        .click();
    }
  }

  Enterlessonitems(lessoname, write) {
    this.lessoncontent.clickonlesson().click();
    this.lessoncontent.addTextItemBtn().click();
    this.lessoncontent.lessonitemname().click().type(lessoname);
    this.lessoncontent.writesomething().click().type(write);
    this.lessoncontent.Duration().type("10");
    this.lessoncontent.unit();
    cy.get('[data-value="hour"]').click();
    this.lessoncontent.additembtn().click();
    cy.wait(2000);
    this.lessoncontent.moreBtn().click();
    this.lessoncontent.videourl().click();
    this.lessoncontent.lessonitemname().type(lessoname);
    this.lessoncontent
      .vidourllink()
      .type("https://youtu.be/-0SuHHi-wa0?si=3yHxcKL_SVRPdZV4");
    this.lessoncontent.Duration().type("10");
    this.lessoncontent.unit();
    cy.get('[data-value="hour"]').click();
    this.lessoncontent.additembtn().click();
    cy.wait(2000);
    this.lessoncontent.videoitem().click();
    this.courseElements.uplodfile().attachFile("edit text.mp4");
    this.lessoncontent.lessonitemname().click().type(lessoname);
    this.lessoncontent.additembtn().click();
    cy.wait(2000);
    this.lessoncontent.moreBtn().click();
    this.lessoncontent.mdfile().click();
    this.lessoncontent.uplodfile().attachFile("markdown.md");
    cy.wait(2000);
    this.lessoncontent.lessonitemname().type(lessoname);
    this.lessoncontent.Duration().type("10");
    this.lessoncontent.unit();
    cy.get('[data-value="hour"]').click();
    this.lessoncontent.additembtn().click();
    cy.wait(2000);
    // Pending to write logic for entering lesson items
  }

  Assessment(namee, disc) {
    this.lessoncontent.moreBtn().click();
    this.Assessmentcontent.Assment().click({ force: true });
    cy.wait(5000);
    this.Assessmentcontent.Name().type(namee);
    this.Assessmentcontent.asstdesciption().type(disc);
    this.Assessmentcontent.savechangebtn().click();
    cy.wait(2000);
    this.Assessmentcontent.addquestion().click();
  }

  Addquiz() {
    this.Quiz.Addpoint().type("10");
    this.Quiz.addtime().type("500");
    this.Quiz.typequestion().type("What is database?");
    this.Quiz.ans1().find('input[type="text"]').type("store value");
    // this.Quiz.ans2()
    //   .first()
    //   .find('input[type="text"]')
    //   .type("Second Option Value");
    //   cy.get('.MuiStack-root').eq(1).within(() => {
    //     cy.get('.MuiFormControl-root').first().find('input[type="text"]').type('Second Option Value');
    // });
    // cy.get(".MuiButtonBase-root.MuiCheckbox-root.css-1hwtvjq").click();
    // this.Quiz.addquestionbtn().click();
    // cy.wait(3000);
  }

  Assignment() {
    this.Assignmentelements.Clickondpdwn().click();
    cy.get('ul[role="listbox"]').contains("Assignment").click();
    cy.wait(2000);
    this.Quiz.Addpoint().clear().type("10");
    this.Quiz.addtime().clear().type("500");
    this.Quiz.typequestion().clear().clear().type("What is Data structure?");
    cy.get("#mui-component-select-acceptResponseType").click();
    cy.get('.MuiPaper-root ul[role="listbox"]').contains("JPG").click();
    cy.get("body").click(0, 0);
    this.Assignmentelements.clickonaddquestion().click();
    cy.wait(5000);
  }

  Descriptive() {
    this.Descriptiveelemnts.addnewquestion().click();
    cy.get("form").eq(1).find(".MuiSelect-select").click();
    cy.get(".MuiList-root").contains("Descriptive").click();
    cy.wait(5000);
    this.Descriptiveelemnts.addpoints().clear().type("10");
    this.Descriptiveelemnts.addtimes().clear().type("500");
    this.Descriptiveelemnts.typequery().clear().type("What is Data structure?");
    this.Descriptiveelemnts.Descans().type("this is your demo answer");
    this.Assignmentelements.clickonaddquestion().click();
    cy.wait(3000)
    cy.contains('button', "Teachers's Dashboard").click();
    cy.wait(2000)
    cy.scrollTo('bottom')
    cy.contains('View Course').click()
    cy.wait(3000)
  }
}
export default createCourse;
