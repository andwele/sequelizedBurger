import React, { Component } from "react";

class InputBox extends Component {
  constructor() {
    // We need to call super before we do anything in the constructor
    super();
    // Setting the intial state, binding our custom method to the class
    this.state = { inputValue: "" };
    // Binding handleButtonClick and handleInputChange to this component since we'll be
    // passing both as callback functions
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleInputChange(event) {
    // Limiting the maximum length of the text in the textarea
    const newValue = event.target.value.substring(0, 140);
    // Storing the new textArea value to state
    this.setState({
      inputValue: newValue
    });
  }
  handleButtonClick() {
    // Calling the addComment method passed down as props by the ListContainer component
    this.props.addComment(this.state.inputValue);
    // Clearing this.state.inputValue (the text in the textbox)
    this.setState({ inputValue: "" });
  }
  render() {
    return (
      <div className="form-group">
        <label style={styles.labelStyle} htmlFor="input-box">
          Leave a comment
        </label>
        <textarea
          style={{ resize: "none" }}
          onChange={this.handleInputChange}
          value={this.state.inputValue}
          placeholder="Write your comment here"
          className="form-control"
          id="input-box"
          rows="3"
        />
        <button
          style={styles.btnStyle}
          onClick={this.handleButtonClick}
          className="btn btn-success"
        >
          Submit
        </button>
      </div>
    );
  }
}

const styles = {
  btnStyle: {
    float: "right",
    marginTop: 10
  },
  labelStyle: {
    float: "left",
    marginBottom: 15
  }
};

export default InputBox;
