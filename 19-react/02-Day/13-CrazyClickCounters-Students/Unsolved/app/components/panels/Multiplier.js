// Include React
var React = require("react");

// Create the Multiplier Component
var Multiplier = React.createClass({
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Multiplier</h3>
        </div>
        <div className="panel-body text-center">

          <h1>{/* Add code here to display this.props.clicks multiplied by itself */}</h1>

        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Multiplier;
