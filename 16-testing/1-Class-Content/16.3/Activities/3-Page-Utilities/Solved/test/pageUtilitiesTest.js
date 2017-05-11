var PageUtilities = require("../src/PageUtilities");
var should = require("chai").should();

describe("pageUtilities", function() {

  var pageUtilities = new PageUtilities(10, 3);

  it("should keep track of how many pages are in the blog", function() {
    pageUtilities.posts.should.equal(10);
  });

  it("should keep track of the blog\"s pagination limit", function() {
    pageUtilities.pagination.should.equal(3);
  });

  it("should keep track of the blog\"s total page count", function() {
    (pageUtilities.totalPages()).should.equal(4);
  });

  describe("should determine how many posts are on page number n", function() {

    it("should determine how many posts are on a middle page", function() {
      // Third page has 3 items.
      pageUtilities.postsOnPage(3).should.equal(3);
    });


    it("should determine how many posts are on the last page", function() {
      // Fourth page has 1 item.
      pageUtilities.postsOnPage(4).should.equal(1);
    });


    it("should handle the error case gracefully", function() {
      // Fifth page does not exist. You could also choose to throw, or return 0.
      pageUtilities.postsOnPage(5).should.equal(-1);
    });
  });

});
