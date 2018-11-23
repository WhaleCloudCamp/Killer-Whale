import React from "react";
import { DropTarget } from "react-dnd";
import styles from "./index.less";
import deleteIcon from "../../assets/web/delete.png";
const grid = 8;
const getListStyle = (canDrop, dropStyle) => ({
  // background: "lightgrey",
  //   padding: grid,
  // height: "50px",
  border: canDrop ? "1px dotted red" : "none",
  display: canDrop ? "block" : "none",

  ...dropStyle,
});
const chessSquareTarget = {
  canDrop(props, monitor) {
    return true;
  },
  hover(props, monitor, component) {},
  drop(props, monitor, component) {
    const item = monitor.getItem();
    props.onDropAction &&
      props.onDropAction({ type: "global/delItem", payload: { id: item.data.id } });
  },
};
function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  };
}
const Types = {
  CHESSPIECE: "card",
};
const DroppableContent = ({ children, dropStyle = {}, connectDropTarget, canDrop }) => {
  return connectDropTarget(
    <div style={getListStyle(canDrop, dropStyle)} className={styles.delItem}>
      <img src={deleteIcon} className={styles.delete} alt="" />
    </div>
  );
};

export default DropTarget(Types.CHESSPIECE, chessSquareTarget, collect)(DroppableContent);
