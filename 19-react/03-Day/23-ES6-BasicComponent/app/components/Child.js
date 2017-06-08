// Import Dependencies using ES6
import React from "react";
import GrandChild from "./GrandChild";

// Create the Component using ES6 class extends syntax
class Child extends React.Component {

  // This is the equivalent of our "getInitialState"
  constructor(props) {

    // This super(props) line lets us access our parents properties as props.
    super(props);

    // This line gives us access to state variables.
    this.state = {
      number: 0
    };
  }

  render() {
    return (

      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Child</h3>
        </div>
        <div className="panel-body text-center">

          {/* The child will reference the parent's click counter as a "prop".
            It will then use it with its own state "number"
          */}
          <h1>{this.state.number + 2 * this.props.clicks}</h1>

          {/*
            It will then pass in both those numbers to its own child "grandchild
            Note there is a better way to do this via didReceiveProps... but we'll get to that later.
          */}
          <GrandChild number={this.state.number + 2 * this.props.clicks} />

        </div>
      </div>
    );
  }
}

// Make the component available elsewhere
export default Child;
