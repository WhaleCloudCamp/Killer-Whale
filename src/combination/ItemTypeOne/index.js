import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import icon from "../../assets/home_package_tittle.png";

export default class ItemTypeOne extends React.Component {
  rendItem = dataItem => {
    if (this.props.dataItem == null || this.props.dataItem.length === 0) {
      return false;
    }

    return dataItem.map((item, i) => (
      <View key={i} style={[styles.centertag, this.props.centertag]}>
        <Text style={[styles.centertagTitleStyle, this.props.centertagTitleStyle]}>
          {item.title}
        </Text>
      </View>
    ));
  };

  render() {
    return (
      <View>
        <View style={styles.secondaryStyle}>
          <Image source={this.props.icon || icon} style={[styles.imgStyle, this.props.imgStyle]} />

          <Text>{this.props.title}</Text>
          <View style={[styles.tag, this.props.tagStyle]}>
            <Text
              style={[styles.tagTitleStyle, this.props.tagTitleStyle]}
              onPress={this.props.onDeatils && this.props.onDeatils()}
            >
              {this.props.tagTitle}
            </Text>
          </View>
        </View>
        <View style={styles.center}>{this.rendItem(this.props.dataItem)}</View>

        <View style={styles.end}>
          <Text style={[styles.priceNameStyle, this.props.priceNameStyle]}>
            {this.props.priceName || "预存款"}
          </Text>
          <Text style={[styles.priceStyle, this.props.priceStyle]}>{this.props.price || "$0"}</Text>

          <View style={[styles.rightStyle, this.props.rightStyle]}>
            <Text style={[styles.rightTextStyle, this.props.rightTextStyle]}>
              {this.props.rightText}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  secondaryStyle: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
  },
  imgStyle: {
    width: 20,
    height: 20,
    margin: 5,
  },
  tag: {
    borderWidth: 1,
    borderColor: "#FFC76F",
    borderRadius: 5,
    margin: 5,
  },
  tagTitleStyle: {
    color: "#FFC76F",
    padding: 3,
    fontSize: 12,
    height: 20,
  },
  center: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 10,
  },
  centertag: {
    borderWidth: 1,
    borderColor: "#02C558",
    borderRadius: 10,
    margin: 3,
  },
  centertagTitleStyle: {
    color: "#02C558",
    padding: 3,
    fontSize: 8,
    height: 20,
  },
  end: {
    flexDirection: "row",
    alignItems: "center",
  },
  priceNameStyle: {
    fontSize: 10,
    marginLeft: 10,
  },
  priceStyle: {
    fontSize: 10,
    color: "red",
    margin: 5,
  },
  rightStyle: {
    position: "absolute",
    right: 0,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: "#02C558",
  },
  rightTextStyle: {
    color: "white",
    fontSize: 10,
    padding: 5,
  },
});
