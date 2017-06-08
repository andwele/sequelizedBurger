import React, { Component } from "react";

// Importing our listItem component
import ListItem from "./ListItem";

// Importing our InputBox component
import InputBox from "./InputBox";

let currentId = 0;

class ListContainer extends Component {
  // Initializing an array for holding comments on state
  constructor() {
    super();
    this.state = {
      comments: [
        {
          id: 0,
          text: "React is awesome!"
        }
      ]
    };
    // Binding our addComment method to this component since we'll be passing it to
    // InputBox to use
    this.addComment = this.addComment.bind(this);
  }
  addComment(text) {
    // First, create a new comment object here. This object should have properties
    // that match the comment object currently in this.state.comments
    // Try giving each comment a unique id, use the `currentId` variable to accomplish this
    // Then use the concat method to create a brand new array with the new comment object added on.
    // Set this.state.comments equal to this new array
  }
  renderList() {
    return this.state.comments.map(item => (
      <ListItem key={item.id}>
        {item.text}
      </ListItem>
    ));
  }
  render() {
    return (
      <div>
        <InputBox addComment={this.addComment} />
        <ul style={styles.listGroupStyle} className="list-group">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

const styles = {
  listGroupStyle: {
    marginTop: 80
  }
};

// Exporting this component as the default (only) export
export default ListContainer;
