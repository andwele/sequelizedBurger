// Include React
var React = require("react");

// This is the main component
var Main = React.createClass({
  // Here we set the initial state of our component
  getInitialState: function() {
    return { message: "Hello World" };
  },

  // Here we describe this component's render method
  render: function() {
    return (
      <h1>
        {this.state.message}
      </h1>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
