import React from "react";
import ReactDOM from "react-dom";

import List from "./components/List";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listData: [{
        id: "a3tr0tzbakwl2vivbo6r",
        text: "Learn React"
      },
      {
        id: "st0b279p76aoykb21emi",
        text: "Learn ES6"
      },
      {
        id: "lot0wx5rtelfcqb54gqfr",
        text: "Get Jobs"
      }]
    };
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <List style={styles.listStyle} data={this.state.listData} />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  listStyle: {
    marginTop: 50
  }
};

ReactDOM.render(
  <App />, document.getElementById("app"));
