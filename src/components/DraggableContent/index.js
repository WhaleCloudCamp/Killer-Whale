import React from "react";
import { DragSource } from 'react-dnd';
const cardSource = {
  canDrag(props) {
    return true;
  },
  isDragging(props, monitor) {
    return monitor.getItem().id === props.draggableId;
  },
  beginDrag(props, monitor, component) {
    console.log("begin",monitor)
    const item = { id: props.draggableId,sourceId:monitor.sourceId };
    return item;
  },
  endDrag(props, monitor, component) {},
};
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  };
}
const grid = 20;
const getItemStyle = isDragging => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  // padding: `0 0 ${grid}px ${grid}px`,
  //   margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : ""

  // styles we need to apply on draggables
});

const DraggableContent = ({
  children,
  onClick,
  index,
  draggableId,
  connectDragSource, connectDragPreview, isDragging 
}) => {
  return connectDragSource(
    <div onClick={onClick} style={getItemStyle(isDragging)}>
      {children}
    </div>
  );
};

const Types = {
  CARD: 'card',
};
export default DragSource(Types.CARD, cardSource, collect)(DraggableContent);
