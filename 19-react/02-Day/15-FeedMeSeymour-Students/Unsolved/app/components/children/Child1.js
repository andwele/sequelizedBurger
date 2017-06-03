// Include React
var React = require("react");

// Create the Child1 Component
var Child1 = React.createClass({

  // Child1 has a state that keeps track of it's food value
  getInitialState: function() {
    return {
      food: 25
    };
  },

  // Whenever the button is clicked we'll run the this.props.feedAudreyII function, passing in
  // this.state.food as an argument. (25 in this case)
  handleClick: function() {
    // Add an onClick listener to the img tag being rendered below.
    // Call the feedAudreyII method and pass in this component's food state.
  },

  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Mmm Mmm Good!</h3>
        </div>
        <div className="panel-body text-center">

          <h3>Human Flesh</h3>
          <img
            alt="Scared Girls"
            src="http://www.toxel.com/wp-content/uploads/2011/10/fear08.jpg"
            width="100%"
          />
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Child1;
