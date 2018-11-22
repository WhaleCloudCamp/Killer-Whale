import React from "react";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";
const DropContext = ({ children }) => {
  return <div>{children}</div>;
};

export default DragDropContext(HTML5Backend)(DropContext);
