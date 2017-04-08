var reporter = {

  report: function(message) {
    console.log(message);
  }

};

var jim = Object.create(reporter);

jim.report("Holy smokes!");
