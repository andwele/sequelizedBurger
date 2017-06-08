// Import Dependencies in ES6
import React from "react";
import Child from "./Child";

// Create the Component using ES6
class Parent extends React.Component {

  // This is the equivalent of our "getInitialState"
  constructor(props) {

    // This super(props) line lets us access our parents properties as props.
    super(props);

    // We assign state directly inside the constructor
    this.state = {
      clicks: 0
    };

    // These lines allow the render function to access our components' functions
    this.handleClick = this.handleClick.bind(this);
    this.resetClick = this.resetClick.bind(this);
  }

  // Here we have the functions associated with our component for registering clicks.
  handleClick() {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  resetClick() {
    this.setState({ clicks: 0 });
  }

  // Render function
  render() {

    return (

      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2>All my children: A Tale of Reactive Components</h2>
            <p><em>Remember, parents pass children their "states". Children inherit them as "props".</em></p>
            <p>
              {/*
                Here we create a button click.
                Note how we have an onClick event associate with our handleClick function.
              */}
              <a className="btn btn-primary btn-lg" type="button" onClick={this.handleClick}>CLICK ME!!!!</a>
              {/* Here we create a button click for resetting the clickCounter */}
              <a className="btn btn-danger btn-lg" type="button" onClick={this.resetClick}>Reset</a>
            </p>
          </div>
          {/* This represents the "Parent" */}
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Parent</h3>
              </div>
              <div className="panel-body text-center">

                {/* This is where we'll show the click count for this component */}
                <h1>{this.state.clicks}</h1>

                {/*
                  Here we'll deploy the child component.
                  We'll pass it the parent's click counter as a prop called "clicks"
                */}
                <Child clicks={this.state.clicks} />

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Export the component back for use in other files
export default Parent;
