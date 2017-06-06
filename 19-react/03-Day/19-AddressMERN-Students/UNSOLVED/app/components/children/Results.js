// Include React
var React = require("react");

// Creating the Results component
var Results = React.createClass({

  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Results</h3>
        </div>
        <div className="panel-body text-center">
          <h1>Address:</h1>
          <p>{this.props.address}</p>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Results;
