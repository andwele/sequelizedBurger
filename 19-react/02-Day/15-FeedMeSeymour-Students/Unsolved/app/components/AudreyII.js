// Include React
var React = require("react");

// Here we include all of the sub-components
var Child1 = require("./children/Child1");
var Child2 = require("./children/Child2");
var Child3 = require("./children/Child3");

// This is the main component, AudreyII
var AudreyII = React.createClass({

  // Here we set a generic state associated with the number of clicks
  getInitialState: function() {
    return { consumed: 0 };
  },

  // componentDidUpdate is a lifecycle event which runs every time AudreyII's state is changed
  // In this case, whenever a child is clicked.
  // Here we have access to the the previous props and previous state from before the update
  componentDidUpdate: function(prevProps, prevState) {
    // Add code here to check if this.state.consumed is zero. If so, alert the user that AudreyII is full
  },

  // Here we create a function for updating the AudreyII's consumed state based on clicks received by the child
  // We will then give the child access to this function
  feedAudreyII: function(food) {
    // If AudreyII's new consumed state is more than 500, reset AudreyII's consumed state to be zero.
    // Otherwise set AudreyII's consumed state to its current value plus the value of the `food` argument recieved.
  },

  // Here we describe our component's render method
  render: function() {
    return (
      <div className="container">

        <div className="row">

          <div className="jumbotron">
            <h2>Feed Me AudreyII!</h2>
            <p>
              <em>Click on AudreyII's Children to Feed Her</em>
            </p>
          </div>
          <div className="col-md-12">

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">AudreyII</h3>
              </div>
              <div className="panel-body text-center">

                <h1>
                  Food Consumed: {this.state.consumed}
                </h1>
                <img alt="AudreyII" src="https://media.giphy.com/media/pBj0EoGSYjGms/giphy.gif" />

              </div>
            </div>

          </div>

          <div className="col-md-4">

            {/* Rennder Child1 here, give it access to the feedAudreyII function */}

          </div>

          <div className="col-md-4">

            {/* Render Child2 here, give it access to the feedAudreyII function */}

          </div>

          <div className="col-md-4">

            {/* Render Child3 here, give it access to the feedAudreyII function */}

          </div>

        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = AudreyII;
