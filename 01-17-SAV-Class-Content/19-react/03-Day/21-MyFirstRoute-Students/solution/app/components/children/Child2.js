// Include React
var React = require("react");

var Child2 = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <div className="panel panel-danger">
            <div className="panel-heading">
              <h3 className="panel-title">Child #2</h3>
            </div>
            <div className="panel-body">
              I'm child 2!
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Child2;
