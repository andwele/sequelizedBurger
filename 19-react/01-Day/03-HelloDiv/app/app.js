// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// This code renders a simple HTML Div.
// The key takeaway here is that we render an ENTIRE DIV.
// Note that ReactDOM.render cannot render a block of HTML elements
// without them all fitting within a single parent div or container.

ReactDOM.render(
  <div>
    <h1>Hey guys! I'm a header!</h1>
    <h2>Things I like!</h2>
    <ul>
      <li>Peas</li>
      <li>Carrots</li>
      <li>Love</li>
    </ul>
  </div>
  , document.getElementById("app"));
