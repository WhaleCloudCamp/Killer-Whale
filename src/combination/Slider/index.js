import { Slider } from "antd-mobile";
import React, { Component } from "react";
import { View } from "react-native";

export default class Sliders extends React.Component {
  render() {
    return (
      <View
        style={{
          borderWidth: 15,
          borderColor: "white"
        }}
      >
        <Slider
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          value={this.props.value}
          disabled={this.props.disabled}
          maximumTrackTintColor={this.props.maximumTrackTintColor}
        />
      </View>
    );
  }
}
