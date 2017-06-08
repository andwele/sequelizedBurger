import React from "react";

// Goal: 1
// Inside the "list-group" ul, write code to map through the list on props.data
// and for each item return an li tag with the className "list-group-item".
// Inside each li, render that text for that list item

// Goal: 2
// Once Goal#1 is complete and we have each list item being rendered, give each li tag a "key" prop of
// the list item's id

// Goal: 3
// Once Goal#3 is complete, try refactoring your solution to destructure "data" off of props and use that
// in your rendered JSX instead. See how "style" is destructured for reference.

const List = (props) => {
  const { style } = props;
  return (
    <ul style={style} className="list-group">

    </ul>
  );
};

export default List;
