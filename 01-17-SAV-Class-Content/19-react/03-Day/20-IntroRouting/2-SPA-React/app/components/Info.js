// Include React
var React = require("react");

var Info = React.createClass({

  // Here we render the component
  render: function() {

    return (

      <div className="container">

        <div className="row">

          <div className="col-lg-12">

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Movie Info</h3>
              </div>
              <div className="panel-body">
                <p><strong>Title:</strong> Space Jam </p>
                <p><strong>Year:</strong> 1996</p>
                <p><strong>Director:</strong> Joe Pytka</p>
                <p><strong>Stars:</strong> Michael Jordan, Wayne Knight, Theresa Randle </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Info;
