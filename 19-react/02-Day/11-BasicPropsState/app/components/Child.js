// Include React
var React = require("react");

// This is the Child component
var Child = React.createClass({

  // Here we set a generic set of states associated with our Child Component
  getInitialState: function() {
    return {
      name: "Bob II",
      img: "https://ae01.alicdn.com/kf/HTB1C54nPXXXXXccXXXXq6xXFXXXy/2pcs-Kids-font-b-Rock-b-font-Street-font-b-Style-b-font-Clothing-set-Toddler.jpg"
    };
  },

  // Here we describe our component's render method
  render: function() {
    return (
      <div className="container">

        <div className="row">

          <div className="col-md-6">

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">{this.state.name}</h3>
              </div>
              <div className="panel-body text-center">

                {/* This is where we'll render some of this component's state to the page */}
                <h1>This is: {this.state.name}</h1>
                <h2>{this.state.name} is a terrible artist</h2>
                <hr />
                {/* Props are handed down to the Child component from Main. (see line 52 in Main.js) */}
                {/* We never directly alter the value of any prop */}
                <h2>Age: {this.props.dadsAge / 8}</h2>
                <h2>Fuzziness: {(!(this.props.dadsFuzzy)).toString()}</h2>
                <h2>Artistry: {this.props.dadsArtistry / 10}</h2>

              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="panel panel-default">
              <div className="panel-body text-center">

                <img alt="Punk Kid" src={this.state.img} width="100%" />

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Child;
