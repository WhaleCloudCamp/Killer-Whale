import { Radio } from "antd-mobile";
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default class RadioItem extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        {this.props.showImg ? <Image style={styles.img} /> : null}

        <Text style={styles.text}>{this.props.title}</Text>
        <Radio {...this.props} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main: {
 
    flexDirection: "row",
    alignItems: "center"
  },
  img: {
    width: 20,
    height: 20,
    backgroundColor: "pink",
    marginLeft: 10
  },
  text: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15
  }
});
