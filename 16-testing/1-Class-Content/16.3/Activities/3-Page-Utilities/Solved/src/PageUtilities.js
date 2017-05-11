"use strict";

function PageUtilities(postCount, paginationLimit) {

  // Set instance page_count
  this.posts = postCount;

  // Set instance pagination limit
  this.pagination = paginationLimit;

}

PageUtilities.prototype.postsOnPage = function postsOnPage(pageNumber) {
  if (pageNumber <= 0 || pageNumber > this.totalPages()) return -1;
  else if (pageNumber < this.totalPages()) return this.pagination;
  else if (pageNumber === this.totalPages()) {
    return this.posts - (this.pagination * this.init());
  }
};


PageUtilities.prototype.init = function init() {
  return this.totalPages() - 1;
};

PageUtilities.prototype.totalPages = function totalPages() {
  return Math.ceil(this.posts / this.pagination);
};

module.exports = PageUtilities;
