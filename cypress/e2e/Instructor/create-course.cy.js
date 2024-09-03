// import instLogin from "../../Pageobjects/instructor/instructor-signin";
// import createCourse from "../../Pageobjects/instructor/createcourse";
// import UniqueCourseNameGenerator from "../../fixtures/uniquecoursename";

// describe("Instructor Sign-In Test Suite", () => {
//   const instlog = new instLogin();
//   const course = new createCourse();
//   let repodata;
//   let courseData;
//   let lessonData;
//   const generator = new UniqueCourseNameGenerator();

//   beforeEach(() => {
//     // Load the instructor data fixture
//     cy.fixture("instructor-data").then((testdata) => {
//       repodata = testdata;
//     });

//     // Load the course data fixture
//     cy.fixture("course-data").then((testdata) => {
//       courseData = testdata;
//     });

//     cy.fixture("lessondata").then((testdata) => {
//         lessonData = testdata;
//       });
// console.log("testing")
//     // Visit the login page after loading fixtures
//     instlog.visit();
//   });

//   it("Instructor Login successfully and create a course", () => {
//     const uniqueCourseName = generator.generateUniqueCourseName();
//     // Use the loaded data to perform login
//     instlog.signininst(repodata.correctemail, repodata.Password);

//     // Pass the course data to the create course method
//     course.createcourse(
//       uniqueCourseName,
//       courseData.language,
//       courseData.description,
//       courseData.learn,
//       courseData.category,
//       courseData.skill,
//       courseData.instructor
//     );

//     course.addUnit()
//     course.Enterlessonitems(lessonData.LessonName, lessonData.LessonDes)
//     course.Assessment(lessonData.Name,lessonData.Des)
//     course.Addquiz()
//     course.Assignment()
//     course.Descriptive()
//   });
// });

import { faker } from '@faker-js/faker'; // Importing the faker library
import instLogin from "../../Pageobjects/instructor/instructor-signin";
import createCourse from "../../Pageobjects/instructor/createcourse";
import UniqueCourseNameGenerator from "../../fixtures/uniquecoursename";

describe("Instructor Sign-In Test Suite", () => {
  const instlog = new instLogin();
  const course = new createCourse();
  let repodata;
  let courseData;
  let lessonData;
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

    cy.fixture("lessondata").then((testdata) => {
      lessonData = testdata;
    });

    // Visit the login page after loading fixtures
    instlog.visit();
  });

  it("Instructor Login successfully and create a course", () => {
    // Generate fake data using faker
    const uniqueCourseName = faker.commerce.productName(); // Random course name
    const randomLanguage = faker.helpers.arrayElement(['English', 'Spanish', 'French', 'German']); // Random language using faker.helpers.arrayElement
    const randomDescription = faker.lorem.sentences(2); // Random description
    const randomLearnDescription = faker.lorem.sentences(3); // Random learn description
    const randomLessonName = faker.lorem.words(3); // Random lesson name
    const randomLessonDesc = faker.lorem.sentence(); // Random lesson description

    // Use the loaded data to perform login
    instlog.signininst(repodata.correctemail, repodata.Password);

    // Pass the fake data to the create course method
    course.createcourse(
      uniqueCourseName,
      randomLanguage,
      randomDescription,
      randomLearnDescription,
      courseData.category,  // Assuming categories and other such data need to remain static or have their own logic
      courseData.skill,
      courseData.instructor
    );

    course.addUnit();
    course.Enterlessonitems(randomLessonName, randomLessonDesc);
    course.Assessment(randomLessonName, randomLessonDesc);
    course.Addquiz();
    course.Assignment();
    course.Descriptive();
  });
});
