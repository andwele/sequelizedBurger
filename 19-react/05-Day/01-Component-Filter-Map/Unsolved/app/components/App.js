// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";

// Including our ListContainer and Container components
import ListContainer from "./components/ListContainer";
import Container from "./components/Container";

// Creating an App component which renders a ListContainer inside of a Container
const App = () => (
  <Container>
    <ListContainer />
  </Container>
);

ReactDOM.render(<App />, document.getElementById("app"));
