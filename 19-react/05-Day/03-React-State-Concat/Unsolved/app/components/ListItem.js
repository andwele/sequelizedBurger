import React from "react";

// Rendering an li tag with props.children between the tags (grocery text)
const ListItem = props => (
  <li className="list-group-item">
    {props.children}
  </li>
);

// Exporting this component as the default (only) export
export default ListItem;
