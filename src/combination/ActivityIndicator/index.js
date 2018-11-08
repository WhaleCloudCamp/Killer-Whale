import { ActivityIndicator } from "antd-mobile";
import React, { Component } from "react";
import { View } from "react-native";

export default class ActivityIndicators extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: "#8B8682",
          width: 150,
          height: 150,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5
        }}
      >
        <ActivityIndicator
          animating={this.props.animating}
          size={this.props.size}
          toast={this.props.toast}
          text={this.props.text}
          color={this.props.color}
        />
      </View>
    );
  }
}
