import { Slider } from "antd-mobile";
import React, { Component } from "react";
import { View } from "react-native";

export default class Sliders extends React.Component {
  render() {
    return (
      <View
        style={{
          borderWidth: 15,
          borderColor: "white",
          backgroundColor: "white",
        }}
      >
        <Slider {...this.props} />
      </View>
    );
  }
}
