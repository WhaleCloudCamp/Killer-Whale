import { Radio } from "antd-mobile";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import showImg from "../../assets/bell.png";

export default class RadioItem extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        {this.props.showType ? (
          <Image source={this.props.showImg || showImg} style={styles.img} />
        ) : null}
        <Text style={[styles.text, this.props.textStyle]}>{this.props.title}</Text>
        <Radio {...this.props} />
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
  img: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  text: {
    width: "100%",
    marginLeft: 10,
    fontSize: 15,
  },
});
