// Include React
var React = require("react");

// Create the Child2 Component
var Child2 = React.createClass({

  // Child2 has a state that keeps track of it's food value
  getInitialState: function() {
    return {
      food: 12
    };
  },

  // Whenever the button is clicked we'll run the this.props.feedAudreyII function, passing in
  // this.state.food as an argument. (12 in this case)
  handleClick: function() {
    // Add an onClick listener to the img tag being rendered below.
    // Call the feedAudreyII method and pass in this component's food state.
  },

  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Tasty Treats</h3>
        </div>
        <div className="panel-body text-center">
          <h3>Frog Livers</h3>
          <img
            alt="Frog"
            src="http://www.cellphonetaskforce.org/wp-content/uploads/2012/01/frog-left.jpg"
            width="100%"
          />
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Child2;
