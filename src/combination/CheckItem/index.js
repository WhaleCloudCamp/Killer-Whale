import { Checkbox } from "antd-mobile";
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class CheckboxItem extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        <Checkbox {...this.props} />
        <Text style={{ flex: 1, marginLeft: 10, fontSize: 15 }}>{this.props.title}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
  },
});
