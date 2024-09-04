import childauth from "../../Pageobjects/Child/child-signup";

const timestamp = Date.now();
const uniqueEmail = `user${timestamp}@example.com`;

describe("Learner Signin Test Suite", () => {
    const child = new childauth();
    let repodata;

    beforeEach(() => {
        cy.fixture("child-data").then((testdata) => {
            repodata = testdata;
            child.visit();
        });
    });

    it('Child Successful Registration', () => {
        child.signupChild(repodata.FirstName, repodata.LastName, uniqueEmail, repodata.Password);
    });

    it('Unsuccessfull Registeration using Existing Email id',()=>{
        child.signupChild(repodata.FirstName,repodata.LastName,repodata.Email,repodata.Password)
        child.getErrorMessage()
    })
});



