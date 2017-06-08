import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Todd",
      age: 23
    };
  }
  render() {
    return (
      <div>
        <p>
          Hi, my name is {this.state.name}.
        </p>
        <p>
          And I'm {this.state.age} years old.
        </p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

