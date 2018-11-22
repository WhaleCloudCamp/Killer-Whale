import React from "react";
import { DragSource } from "react-dnd";
const cardSource = {
  canDrag(props) {
    return true;
  },
  isDragging(props, monitor) {
    return monitor.getItem().id === props.itemData.id;
  },
  beginDrag(props, monitor, component) {
    const item = {
      data: props.itemData,
      index: props.index,
      parentId: props.parentId,
    };
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
const getItemStyle = (isDragging, canDrop, isFlex) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  background: isDragging ? "lightgreen" : "",
  // outline: canDrop ? "1px dotted" : "1px"
  borderWidth: canDrop ? "1px" : isFlex ? "1px" : "0",
  // borderWidth: "1px",
  borderStyle: canDrop ? "dotted" : "dashed",
  paddingLeft: canDrop ? "10px" : "0",
  paddingRight: canDrop ? "10px" : "0",

  // styles we need to apply on draggables
});

const Types = {
  CARD: "card",
};
const DraggableContent = ({
  children,
  onClick,
  index,
  draggableId,
  canDrop,
  connectDragSource,
  isDragging,
  itemData,
}) => {
  const isFlex = itemData.component && itemData.component.isLayout;
  return (
    connectDragSource &&
    connectDragSource(
      <div style={getItemStyle(isDragging, canDrop, isFlex)} onClick={onClick}>
        {children}
      </div>
    )
  );
};
export default DragSource(Types.CARD, cardSource, collect)(DraggableContent);
