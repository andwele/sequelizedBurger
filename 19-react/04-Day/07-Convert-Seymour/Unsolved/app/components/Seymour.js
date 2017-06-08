// Include React
var React = require("react");

// Here we include all of the sub-components
var Child1 = require("./children/Child1");
var Child2 = require("./children/Child2");
var Child3 = require("./children/Child3");

// This is the main component, Seymour
var Seymour = React.createClass({

  // Here we set a generic state associated with the number of clicks
  getInitialState: function() {
    return { consumed: 0 };
  },

  // componentDidUpdate is a lifecycle event which runs every time Seymour's state is changed
  // In this case, whenever a child is clicked.
  // Here we have access to the the previous props and previous state from before the update
  componentDidUpdate: function(prevProps, prevState) {
    // Since our component recieves no props, we'll log out just the current and previous state each
    // time the component updates.
    if (this.state.consumed !== 0) {
      console.log("Updated");
      console.log("Previous state:", prevState);
      console.log("Current state:", this.state);
    }
    // If our state has been reset to 0, we'll alert the user
    else {
      alert("You have done well. Seymour is very full!");
    }
  },

  // Here we create a function for updating the Seymour's consumed state based on clicks received by the child
  // We will then give the child access to this function
  feedSeymour: function(food) {
    var newConsumed = this.state.consumed + food;

    // If Seymour's new consumed state is more than 500, we'll alert the user an reset this.state.consumed to 0
    if (newConsumed > 500) {
      this.setState({ consumed: 0 });
    }
    // Otherwise update this.state.consumed with the new value
    else {
      this.setState({
        consumed: newConsumed
      });
    }
  },

  // Here we describe our component's render method
  render: function() {
    return (
      <div className="container">

        <div className="row">

          <div className="jumbotron">
            <h2>Feed Me Seymour!</h2>
            <p>
              <em>Click on Seymour's Children to Feed Him</em>
            </p>
          </div>
          <div className="col-md-12">

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Seymour</h3>
              </div>
              <div className="panel-body text-center">

                <h1>
                  Food Consumed: {this.state.consumed}
                </h1>
                <img alt="Seymour" src="https://media.giphy.com/media/pBj0EoGSYjGms/giphy.gif" />

              </div>
            </div>

          </div>

          <div className="col-md-4">

            {/* Included Child1, give it access to the feedSeymour function */}
            <Child1 feedSeymour={this.feedSeymour} />

          </div>

          <div className="col-md-4">

            {/* Included Child2, give it access to the feedSeymour function */}
            <Child2 feedSeymour={this.feedSeymour} />

          </div>

          <div className="col-md-4">

            {/* Included Child3, give it access to the feedSeymour function */}
            <Child3 feedSeymour={this.feedSeymour} />

          </div>

        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Seymour;
