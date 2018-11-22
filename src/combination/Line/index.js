import React from "react";
import { View, StyleSheet } from "react-native";

export default class Line extends React.Component {
  render() {
    console.warn(this.props.showType);
    return (
      <View>
        {this.props.showType === "lg" ? (
          <View style={styles.LineFirst} />
        ) : (
          <View style={styles.LineSecond} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  LineFirst: {
    width: "100%",
    height: 10,
    backgroundColor: "#F2F6F8",
  },
  LineSecond: {
    width: "100%",
    height: 0.5,
    backgroundColor: "#F2F6F8",
  },
});
