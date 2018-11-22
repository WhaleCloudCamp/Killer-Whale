import React from "react";
import { Text } from "react-native";

export default class BaseText extends React.Component {
  render() {
    return <Text style={[this.props.titleStyle]}>{this.props.title}</Text>;
  }
}
