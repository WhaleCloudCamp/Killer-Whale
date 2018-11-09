import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { DropTarget } from "react-dnd";

const alias = {
  around: "space-around",
  between: "space-between",
  end: "flex-end",
  start: "flex-start",
  center: "center"
};
const getListStyle = (canDrop, dropStyle) => ({
  // background: isDraggingOver ? "lightblue" : "lightgrey",
  //   padding: grid,
  minHeight: "100%",
  overflow: "auto",
  borderWidth: canDrop ? "1px" : "none",
  borderStyle: canDrop ? "dotted" : "dashed",
  padding: canDrop ? "30px" : null,
  background: "red",
  ...dropStyle
});
const chessSquareTarget = {
  canDrop(props, monitor) {
    return true;
  },
  hover(props, monitor, component) {},
  drop(props, monitor, component) {
    if (monitor.isOver({ shallow: true })) {
      const parentId = props.parentId;
      const item = monitor.getItem();
      console.log(props.onDropAction);
      props.onDropAction &&
        props.onDropAction({
          type: "global/addchildrenCom",
          payload: { item: item.data, parentId: parentId, index: "max" }
        });
    }
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
@DropTarget(Types.CHESSPIECE, chessSquareTarget, collect)
export default class Flex extends React.Component {
  static propTypes = {
    direction: PropTypes.oneOf([
      "row",
      "column",
      "row-reverse",
      "column-reverse"
    ]),
    wrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
    alignItems: PropTypes.oneOf([
      "start",
      "end",
      "center",
      "stretch",
      "baseline"
    ]),
    align: PropTypes.oneOf(["start", "end", "center", "between", "around"])
  };

  static defaultProps = {
    direction: "row",
    wrap: "nowrap",
    alignItems: "center",
    align: "around"
  };

  render() {
    const {
      direction,
      wrap,
      alignItems,
      align,
      children,
      connectDropTarget,
      canDrop
    } = this.props;
    const styles = {
      flex: 1,
      flexDirection: direction,
      flexWrap: wrap,
      alignItems: alias[alignItems] || alignItems,
      justifyContent: alias[align] || align,
      padding: children ? null : 30
    };
    console.log(children);

    return connectDropTarget(
      <div style={getListStyle(canDrop, styles)}>{children}</div>
    );
  }
}
