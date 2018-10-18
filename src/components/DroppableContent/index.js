import React from "react";
import { Droppable } from "react-beautiful-dnd";

const grid = 8;
const getListStyle = (isDraggingOver, dropStyle) => ({
  // background: isDraggingOver ? "lightblue" : "lightgrey",
  //   padding: grid,
  height: "100vh",
  overflow: "auto",
  ...dropStyle
});
const DroppableContent = ({ droppableId, children, dropStyle = {} }) => {
  return (
    <Droppable droppableId={droppableId}>
      {(dropProvided, snapshot) => (
        <div
          ref={dropProvided.innerRef}
          style={getListStyle(snapshot.isDraggingOver, dropStyle)}
        >
          {children}
        </div>
      )}
    </Droppable>
  );
};

export default DroppableContent;
