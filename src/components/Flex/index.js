import React from "react";
import { Flex as AntdFlex } from "antd-mobile";

export default class Flex extends React.Component {
  render() {
    const { children, style, parentId, ...other } = this.props;
    const styles = {
      ...style,
      padding: !children ? "30px" : "0",
    };
    return (
      <AntdFlex {...other} style={styles}>
        {children}
      </AntdFlex>
    );
  }
}
