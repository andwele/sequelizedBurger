// Include React
var React = require("react");

// Create the Randomizer Component
var Randomizer = React.createClass({
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Randomizer</h3>
        </div>
        <div className="panel-body text-center">

          <h1>{/* Add code here to display this.props.clicks multiplied by a random number between 1 and 10 */}</h1>

        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Randomizer;
