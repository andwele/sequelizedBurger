import React from "react";

// Our Container component's only purpose will be to hold and center the rest of our content
// props.children will be substituted for any nested components deployed
const Container = props => (
  <div style={styles.containerStyle} className="container">
    <div className="row">
      <div className="col-md-6 col-md-offset-3">
        {props.children}
      </div>
    </div>
  </div>
);

// An object we'll use to apply inline styles to this component
const styles = {
  containerStyle: {
    marginTop: 50,
    textAlign: "center"
  }
};

// Exporting this component as the default (only) export
export default Container;
