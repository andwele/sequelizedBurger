// Include React
var React = require("react");

// Here we include all of the sub-components
var Child = require("./Child");

// Here we create Parent, our main component
var Parent = React.createClass({
  // Here we describe this component's render method
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2>Warmup!</h2>
            <p>
              <em>Components and Sub-components</em>
            </p>
          </div>
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Parent</h3>
              </div>
              <div className="panel-body text-center">
                <h2>Hey I'm a Parent!</h2>
                {/* Here we'll deploy the Child component. */}
                <Child />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Parent;
