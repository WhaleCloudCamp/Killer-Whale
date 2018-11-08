import { Popover } from "antd-mobile";
import React, { Component } from "react";
import { StyleSheet, Platform, Text } from "react-native";

export default class Propovers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
  }

  onSelect = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    let overlay = [1, 2, 3].map((i, index) => (
      <Popover.Item key={index} value={`option ${i}`}>
        <Text>选项 {i}</Text>
      </Popover.Item>
    ));
    return (
      <Popover
        name="m"
        mask
        visible={this.state.visible}
        style={{ backgroundColor: "#eee" }}
        overlay={overlay}
        contextStyle={styles.contextStyle}
        // tslint:disable-next-line:jsx-no-multiline-js
        overlayStyle={[
          styles.overlayStyle,
          Platform.OS === "android" && styles.androidOverlayStyle
        ]}
        triggerStyle={styles.triggerStyle}
        align={{
          overflow: { adjustY: 0, adjustX: 0 },
          offset: [100, 0]
        }}
        onSelect={this.onSelect}
      >
        <Text>菜单</Text>
      </Popover>
    );
  }
}

const styles = StyleSheet.create({
  contextStyle: {
    margin: 50,
    flex: 1
  },
  overlayStyle: {
    left: 90,
    marginTop: 20,
    color: "currentColor"
  },
  triggerStyle: {
    flexDirection: "row",
    paddingHorizontal: 10
  },
  androidOverlayStyle: {
    borderWidth: 1,
    borderColor: "#ccc"
  }
});
