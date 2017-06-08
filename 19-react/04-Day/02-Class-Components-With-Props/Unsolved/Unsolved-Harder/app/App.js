import React from "react";
import ReactDOM from "react-dom";

import CounterDisplay from "./components/CounterDisplay";

class App extends React.Component {
  // Set the initial state to { count: 0 } inside of the constructor
  constructor() {
    super();
    this.state = {
      count: 0
    };
    // Bind `this` inside of handleDecrement and handleIncrement
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }
  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  }
  handleDecrement() {
    this.setState({ count: this.state.count - 1 });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <div style={styles.panelStyle} className="panel panel-default">
              <div className="panel-heading text-center">Clicky Count!</div>
              <div className="panel-body text-center">
                <CounterDisplay count={this.state.count} />
                <button
                  style={styles.buttonStyles}
                  onClick={this.handleIncrement}
                  className="btn btn-primary"
                >
                  Increment
                </button>
                <button
                  style={styles.buttonStyles}
                  onClick={this.handleDecrement}
                  className="btn btn-danger"
                >
                  Decrement
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Defining styles for the buttons and panel
const styles = {
  buttonStyles: {
    margin: 10
  },
  panelStyle: {
    marginTop: 50
  }
};

ReactDOM.render(
  <App />, document.getElementById("app"));
