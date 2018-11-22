import React from "react";
import { View, StyleSheet, Text, Image, TouchableHighlight } from "react-native";
import scImg from "../../assets/home_id_scanning.png";
import moreImg from "../../assets/home_more_operation.png";
import searchImg from "../../assets/search_icon.png";

export default class HomeBar extends React.Component {
  render() {
    return (
      <View style={[styles.mainStyle, this.props.mainStyle]}>
        <TouchableHighlight
          onPress={this.props.onLeftClick && this.props.onLeftClick()}
          activeOpacity={0.5}
          underlayColor={"white"}
        >
          <View style={styles.secondaryStyle}>
            <Image
              source={this.props.scImg || scImg}
              style={[styles.imgStyle, this.props.imgStyle]}
            />
            <Text style={[styles.textStyle, this.props.textStyle]}>{this.props.textOne}</Text>
          </View>
        </TouchableHighlight>

        <View style={styles.center}>
          <Image source={searchImg} style={{ width: 15, height: 15, margin: 3 }} />
          <Text style={[styles.textCenterStyle, this.props.textCenterStyle]}>
            {this.props.textCenter}
          </Text>
        </View>
        <TouchableHighlight
          onPress={this.props.onRightClcik && this.props.onRightClcik()}
          activeOpacity={0.5}
          underlayColor={"white"}
        >
          <View style={styles.secondaryStyle}>
            <Image
              source={this.props.moreImg || moreImg}
              style={[styles.imgStyle, this.props.imgStyle]}
            />
            <Text style={[styles.textStyle, this.props.textStyle]}>{this.props.textTwo}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainStyle: {
    flexDirection: "row",
    backgroundColor: "#02C558",
    alignItems: "center",
  },
  secondaryStyle: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  center: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    height: 25,
    borderRadius: 5,
    margin: 5,
  },
  imgStyle: { width: 25, height: 25, margin: 5 },
  textStyle: {
    color: "white",
    fontSize: 15,
  },
  textCenterStyle: {
    color: "gray",
    fontSize: 10,
  },
});
