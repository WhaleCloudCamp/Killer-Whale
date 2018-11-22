import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Grid } from "antd-mobile";
import "antd-mobile/lib/grid/style";

export default class QuickEntry extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        {this.props.showType === 1 ? (
          <View style={styles.quick}>
            <View style={[styles.lump, this.props.lump]} />
            <Text style={[styles.textStyle, this.props.textStyle]}>{this.props.title}</Text>
          </View>
        ) : null}

        <Grid {...this.props} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    margin: 10,
  },
  quick: {
    flexDirection: "row",
    alignItems: "center",
  },
  lump: {
    backgroundColor: "#02C558",
    width: 5,
    height: 15,
  },
  textStyle: {
    margin: 5,
    fontWeight: "bold",
  },
});
