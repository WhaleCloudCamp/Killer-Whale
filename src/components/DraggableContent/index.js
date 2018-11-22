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
  position: isFlex ? "relative" : "",

  // styles we need to apply on draggables
});

const chessSquareTarget = {
  canDrop(props, monitor) {
    return true;
  },
  hover(props, monitor, component) {
    // console.log("move");
    // console.log(component);

    if (!component) {
      return null;
    }
    const dragIndex = monitor.getItem().index;
    const dragParentId = monitor.getItem().parentId;
    const hoverIndex = props.index;
    const hoverParentId = props.parentId;

    // Don't replace items with themselves
    if (
      dragIndex === hoverIndex ||
      dragParentId !== hoverParentId ||
      (!dragIndex && dragIndex !== 0) ||
      (!hoverIndex && hoverIndex !== 0)
    ) {
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
    console.log(dragIndex, dragParentId, hoverIndex, hoverParentId);

    props.onDropAction &&
      props.onDropAction({
        type: "global/moveItem",
        payload: { dragIndex, hoverIndex, parentId: hoverParentId },
      });

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  },
  drop(props, monitor, component) {
    const item = monitor.getItem();
    if (!item.index && item.index !== 0 && monitor.isOver({ shallow: true })) {
      console.log("item.index", item.index);
      console.log("props.itemData", props.itemData);
      if (props.itemData.component && props.itemData.component.type === "Flex") {
        const parentId = props.itemData.id;
        props.onDropAction &&
          props.onDropAction({
            type: "global/addchildrenCom",
            payload: { item: item.data, parentId: parentId, index: "max" },
          });
      } else {
        props.onDropAction &&
          props.onDropAction({
            type: "global/addItem",
            payload: {
              item: item.data,
              index: props.index + 1 || "max",
              parentId: props.parentId,
            },
          });
      }
    }
  },
};
function collectDrop(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  };
}
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
  connectDropTarget,
  isDragging,
  itemData,
}) => {
  const isFlex = itemData.component && itemData.component.isLayout;
  return (
    connectDropTarget &&
    connectDragSource &&
    connectDropTarget(
      connectDragSource(
        <div style={getItemStyle(isDragging, canDrop, isFlex)} onClick={onClick}>
          {
            //   isFlex&& <div
            //   style={{
            //     fontSize: "16px",
            //     background: "red",
            //     top: "0",
            //     position: "absolute",
            //     color: "white",
            //     right: "0",
            //     zIndex: "99"
            //   }}
            // >
            //   {
            //     itemData.component.type
            //   }
            // </div>
          }
          {children}
        </div>
      )
    )
  );
};
export default DropTarget(Types.CARD, chessSquareTarget, collectDrop)(
  DragSource(Types.CARD, cardSource, collect)(DraggableContent)
);
