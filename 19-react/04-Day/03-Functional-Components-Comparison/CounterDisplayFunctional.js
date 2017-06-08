import React from "react";

// Functional components are just functions which return some JSX to be rendered
// These don't neccesarily have to be arrow functions
// Any arguments passed are automatically added to the props argument
const CounterDisplay = props => (
  <div className="text-center">
    <h1>{props.count}</h1>
  </div>
);

export default CounterDisplay;
