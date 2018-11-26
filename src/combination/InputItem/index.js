import { InputItem } from "antd-mobile";
import React from "react";
import { Text, Image, StyleSheet } from "react-native";
import imgurl from "../../assets/phone.png";

export default class InputItems extends React.Component {
  render() {
    return (
      <InputItem {...this.props}>
        {this.props.showtype === "2" ? (
          <Image
            resizeMode="contain"
            source={this.props.imgurl || imgurl}
            style={{ width: 25, height: 25 }}
          />
        ) : (
          <Text style={[styles.TitleStyle, this.props.titlestyle]}>{this.props.title}</Text>
        )}
      </InputItem>
    );
  }
}

const styles = StyleSheet.create({
  TitleStyle: {
    fontSize: 15,
    color: "black",
  },
});
