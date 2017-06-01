// Include React
var React = require("react");
// Here we include all of the sub-components
var GrandChild = require("./GrandChild");

// Create the Child Component
var Child = React.createClass({
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Child</h3>
        </div>
        <div className="panel-body text-center">
          <h3>HEY I'm the Child!</h3>
          {/* Here we'll deploy the GrandChild Component  */}
          <GrandChild />
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Child;
