import React from "react";
import { DropTarget } from "react-dnd";

const grid = 8;
const getListStyle = (isDraggingOver, dropStyle) => ({
  // background: isDraggingOver ? "lightblue" : "lightgrey",
  //   padding: grid,
  minHeight: "100vh",
  overflow: "auto",
  border: "1px dotted",
  margin: "10px",
  ...dropStyle
});
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
    // props.dispatch({ type: "global/dndAction", payload: item });

    // props.dispatch({
    //   type: 'set/dropFirstPanel',
    //   payload: {
    //     id: item.id,
    //   },
    // });
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
const DroppableContent = ({ droppableId, children, dropStyle = {},connectDropTarget, canDrop }) => {
  return connectDropTarget(
    <div style={getListStyle(canDrop, dropStyle)} >
      {children}
    </div>
  );
  // return (
  //   <Droppable droppableId={droppableId}>
  //     {(dropProvided, snapshot) => (
  //       <div
  //         ref={dropProvided.innerRef}
  //         style={getListStyle(snapshot.isDraggingOver, dropStyle)}
  //       >
  //         {children}
  //       </div>
  //     )}
  //   </Droppable>
  // );
};

export default DropTarget(Types.CHESSPIECE, chessSquareTarget, collect)(
  DroppableContent
);
