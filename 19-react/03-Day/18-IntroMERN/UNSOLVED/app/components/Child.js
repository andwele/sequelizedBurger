// Include React
var React = require("react");

// Here we include all of the sub-components
var GrandChild = require("./GrandChild");

// Create the Child Component
var Child = React.createClass({

  // Child has a state that follows the number of clicks
  getInitialState: function() {
    return {
      number: 0
    };
  },
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Child</h3>
        </div>
        <div className="panel-body text-center">

          {/*
            This component recieves a clicks variable as a prop from it's parent.
            See line 64 of Parent.jsx
          */}
          <h1>{this.state.number + 2 * this.props.clicks}</h1>

          {/*
            This component will then render the GrandChild component. It will give GrandChild a prop
            called "number" which will be calculated by multiplying this.state.number and this.props.clicks
          */}
          <GrandChild number={this.state.number + 2 * this.props.clicks} />

        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Child;
