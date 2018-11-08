import { InputItem } from "antd-mobile";
import React, { Component } from "react";
import { Text, Image } from "react-native";
import imgurl from '../../assets/phone.png'

export default class InputItems extends React.Component {
  render() {
    return (
      <InputItem {...this.props}>
        {this.props.showtype === 2 ? (
          <Image
          resizeMode='contain'
            source={this.props.imgurl||imgurl}
            style={{ width: 25, height: 25 }}
          />
        ) : (
          <Text>{this.props.title}</Text>
        )}
      </InputItem>
    );
  }
}
