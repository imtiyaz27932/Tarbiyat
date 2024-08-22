import instLogin from "../../Pageobjects/instructor/instructor-signin";
import createCourse from "../../Pageobjects/instructor/createcourse";
import UniqueCourseNameGenerator from "../../fixtures/uniquecoursename";

describe("Instructor Sign-In Test Suite", () => {
  const instlog = new instLogin();
  const course = new createCourse();
  let repodata;
  let courseData;
  const generator = new UniqueCourseNameGenerator();

  beforeEach(() => {
    // Load the instructor data fixture
    cy.fixture("instructor-data").then((testdata) => {
      repodata = testdata;
    });

    // Load the course data fixture
    cy.fixture("course-data").then((testdata) => {
      courseData = testdata;
    });

    // Visit the login page after loading fixtures
    instlog.visit();
  });

  it("Instructor Login successfully and create a course", () => {
    const uniqueCourseName = generator.generateUniqueCourseName();
    // Use the loaded data to perform login
    instlog.signininst(repodata.correctemail, repodata.Password);

    // Pass the course data to the create course method
    course.createcourse(
      uniqueCourseName,
      courseData.language,
      courseData.description,
      courseData.learn,
      courseData.category,
      courseData.skill,
      courseData.instructor
    );

    course.addUnit()
  });
});
