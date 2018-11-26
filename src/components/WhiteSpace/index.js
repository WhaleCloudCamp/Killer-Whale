import React from "react";
import { WhiteSpace as AntdWhiteSpace } from "antd-mobile";

export default class WhiteSpace extends React.Component {
  render() {
    const { children, style, parentId, ...other } = this.props;
    const styles = {
      ...style,
      padding: !children ? "30px" : "0",
    };
    return (
      <AntdWhiteSpace {...other} style={styles}>
        {children}
      </AntdWhiteSpace>
    );
  }
}
