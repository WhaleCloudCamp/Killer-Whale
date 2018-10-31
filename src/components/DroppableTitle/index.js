import React from "react";
import { DropTarget } from "react-dnd";

const getListStyle = canDrop => ({
  minHeight: "100vh",
  overflow: "auto",
  border: canDrop ? "1px dotted" : "",
  margin: "10px"
});
const chessSquareTarget = {
  canDrop(props, monitor) {
    return true;
  },
  hover(props, monitor, component) {},
  drop(props, monitor, component) {
    const item = monitor.getItem();
    props.dispatch({ type: "global/delItem", payload: item });
  }
};
function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}
const Types = {
  CHESSPIECE: "card"
};
const DroppableContent = ({
  droppableId,
  children,
  dropStyle = {},
  connectDropTarget,
  canDrop
}) => {
  return connectDropTarget(
    <div style={getListStyle(canDrop, dropStyle)}>{children}</div>
  );
};

export default DropTarget(Types.CHESSPIECE, chessSquareTarget, collect)(
  DroppableContent
);
