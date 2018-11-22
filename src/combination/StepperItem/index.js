import { Stepper } from "antd-mobile";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class StepperItem extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        <Text style={[styles.text, this.props.textStyle]}>{this.props.title}</Text>
        <View>
          <Stepper {...this.props} style={[styles.stepStyle, this.props.stepStyle]} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    flex: 1,
    fontSize: 15,
  },
  stepStyle: {
    width: 60,
  },
});
