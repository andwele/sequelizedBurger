import React from "react";

// Since we aren't maintaining any component state or setting any values inside
// a constructor, we can refactor this component to be a functional component
class CounterDisplay extends React.Component {
  render() {
    return (
      <div className="text-center">
        <h1>{this.props.count}</h1>
      </div>
    );
  }
}

export default CounterDisplay;
