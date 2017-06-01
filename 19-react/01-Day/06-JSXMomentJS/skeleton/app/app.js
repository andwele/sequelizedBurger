// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Include the momentJS library
var moment = require("moment");

// Here we create a variable for holding the name and birthday
var name = "Ahmed";
var dob = moment("02/14/1989", "MM/DD/YYYY");

ReactDOM.render(
  <div className="main-container">
    <div className="container">
      <div className="jumbotron">

        {/* Fill the blanks below with the name, dob, and then age in years  */}
        <h2>My name is _____.</h2>
        <h1>I was born on _______</h1>
        <hr />
        <h2>That makes me: _______ old.
        </h2>
      </div>
    </div>
  </div>, document.getElementById("app"));
