// Import Dependencies in ES6
import React from "react";

// Create the Component using ES6 class extends syntax
class GrandChild extends React.Component {

  // This is the equivalent of our "getInitialState"
  constructor(props) {
    // This super(props) line lets us access our parents properties as props.
    super(props);

    // We assign state directly inside the constructor
    this.state = {
      number: 0
    };
  }

  render() {
    return (

      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">GrandChild</h3>
        </div>
        <div className="panel-body text-center">

          {/*
            Grandchild will use it's own parents number ("child") with its own state.
          */}
          <h1>{this.state.number + 4 * this.props.number}</h1>

        </div>
      </div>
    );
  }
}


// Export the component back for use in other files
export default GrandChild;
