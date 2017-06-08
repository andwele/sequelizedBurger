import React, { Component } from "react";

// Importing our listItem component
import ListItem from "./ListItem";

// Importing an array of grocery data to use
import groceries from "../../groceries";

class ListContainer extends Component {
  // Defining a constructor method where we set our initial state
  constructor() {
    // Calling super() here before we start assigning values
    super();
    // Setting this.state.groceries to our groceries array
    this.state = {
      groceries
    };
  }
  renderList() {
    // Write code here to filter the groceries on this.state into a new array containing
    // only puchased grocery items
    // Then run a map on that new filtered array and return one ListItem component for
    // each grocery item. Pass the grocery item text property down as a child of the ListItem
    // component, and give each Listitem component a key prop of the grocery item id
  }
  render() {
    // We run {this.renderList()} inside the div to return the result of that method
    return (
      <div>
        <h1>Purchased Groceries</h1>
        <ul className="list-group">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

// Exporting this component as the default (only) export
export default ListContainer;
