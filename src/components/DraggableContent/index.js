import React from "react";
import { findDOMNode } from "react-dom";
import { DragSource, DropTarget } from "react-dnd";
const cardSource = {
  canDrag(props) {
    return true;
  },
  isDragging(props, monitor) {
    return monitor.getItem().id === props.itemData.id;
  },
  beginDrag(props, monitor, component) {
    const item = { data: props.itemData, index: props.index };
    return item;
  },
  endDrag(props, monitor, component) {}
};
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}
const grid = 20;
const getItemStyle = (isDragging, canDrop) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  background: isDragging ? "lightgreen" : "",
  outline: canDrop ? "1px dotted" : "none"
  // styles we need to apply on draggables
});


const chessSquareTarget = {
  canDrop(props, monitor) {
    return true;
  },
  hover(props, monitor, component) {
    if (!component) {
      return null;
    }
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex || !dragIndex&&dragIndex!==0 || !hoverIndex&&hoverIndex!==0) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    // Time to actually perform the action

    props.onDropAction&&props.onDropAction({
      type: "global/moveItem",
      payload: { dragIndex, hoverIndex}
    });

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  },
  drop(props, monitor, component) {
    const item = monitor.getItem();
    if (!item.index&&item.index!==0&&monitor.isOver({ shallow: true })){
      console.log("item.index",item.index);

      props.onDropAction&&props.onDropAction({
        type: "global/addItem",
        payload: { item: item.data, index: props.index + 1 || "max" }
      });
    }
  }
};
function collectDrop(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}
const Types = {
  CARD: "card"
};
const DraggableContent = ({
  children,
  onClick,
  index,
  draggableId,
  canDrop,
  connectDragSource,
  connectDropTarget,
  isDragging
}) => {
  return (
    connectDropTarget &&
    connectDragSource &&
    connectDropTarget(
      connectDragSource(
        <div onClick={onClick} style={getItemStyle(isDragging, canDrop)}>
          {children}
        </div>
      )
    )
  );
};
export default DropTarget(Types.CARD, chessSquareTarget, collectDrop)(
  DragSource(Types.CARD, cardSource, collect)(DraggableContent)
);
