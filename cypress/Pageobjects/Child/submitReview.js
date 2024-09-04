class Review {
  visit() {
    cy.visit("https://tarbiyat.graphicweave.com/sign-in/");
  }

  ReviewSelector = {
    clickonmyLearning: () => cy.contains("a", "My Learning"),
    clickoncourse: () => cy.get(".MuiCardContent-root"),
    ClickonCourseReview: () => cy.contains("a", "Course Review"),
    clickonReviewbtn: () => cy.contains("button", "Write your review"),
    SelectStars: () => cy.get('input[name="starRating"][value="3"]'),
    writeReview: () => cy.get('textarea[name="review"]'),
    PostBtn: () => cy.contains("Post"),
  };

  SubmitReview(rev) {
    this.ReviewSelector.clickonmyLearning().click();
    cy.wait(3000);
    this.ReviewSelector.clickoncourse().last().click();
    cy.wait(3000);
    this.ReviewSelector.ClickonCourseReview().click();
    this.ReviewSelector.clickonReviewbtn().click();
    cy.wait(3000);
    this.ReviewSelector.SelectStars().click({ force: true });
    this.ReviewSelector.writeReview().click().type(rev);
    this.ReviewSelector.PostBtn().click();
    cy.wait(3000);
  }
}
export default Review;
