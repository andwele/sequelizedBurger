// Include React
var React = require("react");

// Here we include all of the sub-components
var Child = require("./Child");

// Here we create our main component, Parent. It displays a click count and renders the Child
var Parent = React.createClass({
  // Here we set a generic state associated with the number of clicks on this component
  getInitialState: function() {
    return {
      clicks: 0
    };
  },
  // Here we create a function for updating this component's clicks
  // We will give the Child component access to this function by passing it as a prop
  setParent: function(newClicks) {
    this.setState({
      clicks: newClicks
    });
  },
  // Here we render the function
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2>When Children Rebel: A Tale of Reactive Components</h2>
            <p><em>Children influence parent via callbacks given to them by the parent.</em></p>
          </div>
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Parent</h3>
              </div>
              <div className="panel-body text-center">
                {/* Displaying this component's clicks */}
                <h1>{this.state.clicks}</h1>
                {/*
                  Here we'll deploy the Child component. We'll pass it the setParent function
                  defined above for setting this component's state
                */}
                <Child setParent={this.setParent} />
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
