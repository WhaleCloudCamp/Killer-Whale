import React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import img from "../../assets/popup_bg_wrong.png";

export default class DialogOne extends React.Component {
  render() {
    return (
      <View style={this.props.mainStyle}>
        <Image source={this.props.img || img} style={this.props.imgStyle} />

        <Text style={this.props.contentStyle}>{this.props.title}</Text>
        <View style={{ flexDirection: "row" }}>
          {this.props.showCancel ? (
            <TouchableHighlight
              style={[this.props.btnCancelStyle]}
              activeOpacity={0.5}
              onPress={this.onCancel && this.onCancel()}
            >
              <Text style={this.props.btnCancelTextStyle}> {this.props.btnCancelText}</Text>
            </TouchableHighlight>
          ) : null}

          <TouchableHighlight
            style={this.props.btnSureStyle}
            activeOpacity={0.5}
            onPress={this.onSure && this.onSure()}
          >
            <Text style={this.props.btnSureTextStyle}> {this.props.btnSureText}</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
