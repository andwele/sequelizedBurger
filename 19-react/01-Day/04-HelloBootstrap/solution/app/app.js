// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// This code here allows us to render an entire block of Bootstrap layout HTML

// It's especially important to notice two things:

// 1. That all of the bootstrap content was dumped into a single "main-container" div.
//    This can be named anything. But there must always be ONE single div that all of the HTML fits inside of.
// 2. All of the "class" keywords have been replaced by "className".
//    This is because "class" is a reserved keyword in JS.
ReactDOM.render(
  <div className="main-container">
    <div className="jumbotron">
      <h1>Hello, world!</h1>
      <p>I'm a jumbotron!</p>
      <p>
        <a className="btn btn-primary btn-lg">Learn more</a>
      </p>
    </div>

    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Panel title</h3>
      </div>
      <div className="panel-body">
        Panel content
      </div>
    </div>

    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Panel title</h3>
      </div>
      <div className="panel-body">
        Panel content
      </div>
    </div>
  </div>,
  document.getElementById("app")
);
