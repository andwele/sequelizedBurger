// Include React
var React = require("react");

var GrandChild1 = React.createClass({
  render: function() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">Grandchild #1</h3>
        </div>
        <div className="panel-body">
          I'm grandchild 1!
        </div>
      </div>
    );
  }
});

module.exports = GrandChild1;
