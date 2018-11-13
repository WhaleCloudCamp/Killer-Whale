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
const getListStyle = (canDrop, dropStyle, children) => ({
  // background: isDraggingOver ? "lightblue" : "lightgrey",
  //   padding: grid,
  minHeight: "100%",
  overflow: "auto",
  // borderWidth: canDrop ? "1px" : "0",
  borderWidth: canDrop ? "0":"1px",

  borderStyle: canDrop ? "dotted" : "dashed",
  padding: canDrop || !children ? "30px" : "0",

  // background: canDrop ?"green":"none",
  ...dropStyle
});
const chessSquareTarget = {
  canDrop(props, monitor) {
    try {
      return monitor.getItem().data.id !== props.parentId;
    } catch (error) {
      return true;
    }
  },
  hover(props, monitor, component) {},
  drop(props, monitor, component) {
    const item = monitor.getItem();
    if (!item.index && item.index !== 0 && monitor.isOver({ shallow: true })) {
      const parentId = props.parentId;
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
      // flex: 1,rn使用这个参数
      display: "flex",
      position: "relative",
      flexDirection: direction,
      flexWrap: wrap,
      alignItems: alias[alignItems] || alignItems,
      justifyContent: alias[align] || align
    };

    return connectDropTarget(
      <div style={getListStyle(canDrop, styles, children)}>
        <div
          style={{
            fontSize: "16px",
            background: "red",
            top: "0",
            position: "absolute",
            color: "white",
            right: "0",
            zIndex: "99"
          }}
        >
          Flex
        </div>
        {children}
        {
          // <div style={{fontSize:"25px",background:"red"}}>2</div>
          // <div style={{fontSize:"30px",background:"red"}}>2</div>
          // <div style={{fontSize:"35px",background:"red"}}>2</div>
          // <div style={{fontSize:"40px",background:"red"}}>2</div>
          // <div style={{fontSize:"45px",background:"red"}}>2</div> <div style={{fontSize:"20px",background:"red"}}>2</div>
          // <div style={{fontSize:"25px",background:"red"}}>2</div>
          // <div style={{fontSize:"30px",background:"red"}}>2</div>
          // <div style={{fontSize:"35px",background:"red"}}>2</div>
          // <div style={{fontSize:"40px",background:"red"}}>2</div>
          // <div style={{fontSize:"45px",background:"red"}}>2</div> <div style={{fontSize:"20px",background:"red"}}>2</div>
          // <div style={{fontSize:"25px",background:"red"}}>2</div>
          // <div style={{fontSize:"30px",background:"red"}}>2</div>
          // <div style={{fontSize:"35px",background:"red"}}>2</div>
          // <div style={{fontSize:"40px",background:"red"}}>2</div>
          // <div style={{fontSize:"45px",background:"red"}}>2</div> <div style={{fontSize:"20px",background:"red"}}>2</div>
          // <div style={{fontSize:"25px",background:"red"}}>2</div>
          // <div style={{fontSize:"30px",background:"red"}}>2</div>
          // <div style={{fontSize:"35px",background:"red"}}>2</div>
          // <div style={{fontSize:"40px",background:"red"}}>2</div>
          // <div style={{fontSize:"45px",background:"red"}}>2</div> <div style={{fontSize:"20px",background:"red"}}>2</div>
          // <div style={{fontSize:"25px",background:"red"}}>2</div>
          // <div style={{fontSize:"30px",background:"red"}}>2</div>
          // <div style={{fontSize:"35px",background:"red"}}>2</div>
          // <div style={{fontSize:"40px",background:"red"}}>2</div>
          // <div style={{fontSize:"45px",background:"red"}}>2</div>
        }
      </div>
    );
  }
}
