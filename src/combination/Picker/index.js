import { Picker, List } from "antd-mobile";
import React, { Component } from "react";
import { View } from "react-native";

export default class Pickers extends React.Component {
  render() {
    return (
      <View>
        <Picker
          data={this.props.data}
          cols={this.props.data.lenth}
          cascade={this.props.cascade}
          title={this.props.title}
        >
          <List.Item arrow="horizontal">{this.props.content}</List.Item>
        </Picker>
      </View>
    );
  }
}
