// Include React
var React = require("react");

var GrandChild2 = React.createClass({
  render: function() {
    return (
      <div className="panel panel-success">
        <div className="panel-heading">
          <h3 className="panel-title">Grandchild #2</h3>
        </div>
        <div className="panel-body">
          I'm grandchild 2!
        </div>
      </div>
    );
  }
});

module.exports = GrandChild2;
