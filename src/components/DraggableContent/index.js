import React from "react";
import { Draggable } from "react-beautiful-dnd";

const grid = 8;
const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: `0 0 ${grid}px 0`,
  //   margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "",

  // styles we need to apply on draggables
  ...draggableStyle
});

const DraggableContent = ({ draggableId, children, onClick,index }) => {
  return (
    <Draggable draggableId={draggableId} index={index}> 
      {(draggableProvided, draggableSnapshot) => (
        <div
          onClick={onClick}
          ref={draggableProvided.innerRef}
          {...draggableProvided.draggableProps}
          {...draggableProvided.dragHandleProps}
          style={getItemStyle(
            draggableSnapshot.isDragging,
            draggableProvided.draggableProps.style
          )}
        >
          {children}
        </div>
      )}
    </Draggable>
  );
};

export default DraggableContent;
