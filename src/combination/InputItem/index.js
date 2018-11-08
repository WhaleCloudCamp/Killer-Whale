import { InputItem } from "antd-mobile";
import React, { Component } from "react";
import { Text, Image } from "react-native";

export default class InputItems extends React.Component {
  render() {
    return (
      <InputItem {...this.props}>
        {this.props.showtype === 2 ? (
          <Image
            source={{ uri: this.props.imgurl }}
            style={{ width: 25, height: 25 }}
          />
        ) : (
          <Text>{this.props.title}</Text>
        )}
      </InputItem>
    );
  }
}
