import React, { Component } from "react";

// Importing our dropdown component
import Dropdown from "./Dropdown";

// Defining a list of dropwdown options here
const dropdownOptions = [
  {
    text: "Show Lorem",
    value: "SHOW_LOREM"
  }, {
    text: "Show Cat Picture",
    value: "SHOW_CAT"
  }, {
    text: "Hide Everything",
    value: "SHOW_NONE"
  }
];

class Panel extends Component {
  // Initializing our dropdownOptions on state, setting a default selected option
  // Also setting all of our possible options using the dropdownOptions variable
  constructor() {
    super();
    this.state = {
      dropdownOptions,
      selected: {
        text: "Show Lorem",
        value: "SHOW_LOREM"
      }
    };
    // Binding handleDropdownSelect to our component since we'll be passing
    // This method to another component
    this.handleDropdownSelect = this.handleDropdownSelect.bind(this);
  }
  // This function is called by the Dropdown component whenever an option is chosen
  handleDropdownSelect(option) {
    // Setting this.state.selected to the dropdown option the user clicks
    this.setState({ selected: option });
  }
  render() {
    return (
      <div className="panel panel-default">
        <div
          style={styles.panelHeadingStyle}
          className="panel-heading"
        >
          Choose One!
          <Dropdown
            style={styles.dropdownStyle}
            options={this.state.dropdownOptions}
            selected={this.state.selected}
            handleSelect={this.handleDropdownSelect}  
          />
        </div>
        <div className="panel-body">
        {/* Here is where we want to render our conditional content */}
        </div>
      </div>
    );
  }
}

// Some styles we'll pass to our Panel component and dropwdown component
const styles = {
  dropdownStyle: {
    float: "right",
    bottom: 10
  },
  panelHeadingStyle: {
    padding: 20
  }
};

// Exporting our Panel component
export default Panel;
