import React from "react";
import { WingBlank as AntdWingBlank } from "antd-mobile";

export default class WingBlank extends React.Component {
  render() {
    const { children, style, parentId, ...other } = this.props;
    const styles = {
      ...style,
      padding: !children ? "30px" : "0",
    };
    return (
      <AntdWingBlank {...other} style={styles}>
        {children}
      </AntdWingBlank>
    );
  }
}
