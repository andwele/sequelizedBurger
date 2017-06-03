// Include React
var React = require("react");

// Include Child
var Child = require("./Child");

// This is the Main component
var Main = React.createClass({
  // Here we set a generic set of states associated with our Main Component
  getInitialState: function() {
    return {
      name: "Bob",
      age: 64,
      artistry: 94,
      isFuzzy: true,
      img: "https://pbs.twimg.com/profile_images/659846506678124544/qptu8mfw.jpg"
    };
  },
  // Here we describe our component's render method
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h1>Bob and Bob II</h1>
            <h2>A lesson on props, states, parents, and children </h2>
          </div>
          <div className="col-md-6">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">{this.state.name}</h3>
              </div>
              <div className="panel-body text-center">
                {/* Displaying some information about our component using it's state */}
                <h1>This is: {this.state.name}</h1>
                <h2>{this.state.name} is a fantastic artist</h2>
                <hr />
                <h2>Age: {this.state.age}</h2>
                <h2>Fuzziness: {this.state.isFuzzy.toString()}</h2>
                <h2>Artistry: {this.state.artistry}</h2>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="panel panel-default">
              <div className="panel-body text-center">
                <img alt="Bob Ross" src={this.state.img} width="100%" />
              </div>
            </div>
          </div>
          {/* Passing 3 props to the Child component. These are accessible in Child as this.props  */}
          <Child dadsAge={this.state.age} dadsFuzzy={this.state.isFuzzy} dadsArtistry={this.state.artistry} />
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
