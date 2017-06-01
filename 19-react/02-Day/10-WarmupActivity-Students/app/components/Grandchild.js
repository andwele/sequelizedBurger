// Include React
var React = require("react");

// Create the GrandChild Component
var GrandChild = React.createClass({
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">GrandChild</h3>
        </div>
        <div className="panel-body text-center">
          <h4>Hey I'm a Grandchild!</h4>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = GrandChild;
