import React from "react";
import { DragSource } from "react-dnd";
const cardSource = {
  canDrag(props) {
    return true;
  },
  isDragging(props, monitor) {
    return monitor.getItem().id === props.draggableId;
  },
  beginDrag(props, monitor, component) {
    console.log("begin", monitor);
    const item = { id: props.draggableId, sourceId: monitor.sourceId };
    return item;
  },
  endDrag(props, monitor, component) {}
};
const chessSquareTarget = {
  canDrop(props, monitor) {
    return true;
  },
  hover(props, monitor, component) {},
  drop(props, monitor, component) {
    const item = monitor.getItem();
    const action = {
      destination: {
        droppableId: monitor.sourceId
      },
      draggableId: "leftPanel1",
      reason: "",
      source: {
        droppableId: item.sourceId
      },
      type: ""
    };
    console.log(item);
  }
};
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}
function collectdrop(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}
const grid = 20;
const getItemStyle = isDragging => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: `0 0 ${grid}px ${grid}px`,
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
  connectDragSource,
  connectDropTarget,
  isDragging
}) => {
  return connectDragSource(
    connectDropTarget(
      <div onClick={onClick} style={getItemStyle(isDragging)}>
        {children}
      </div>
    )
  );
};

const Types = {
  CARD: "card"
};
export default DropTarget(Types.CHESSPIECE, chessSquareTarget, collectdrop)(
  DragSource(Types.CARD, cardSource, collect)(DraggableContent)
);
