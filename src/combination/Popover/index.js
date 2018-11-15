import { Popover } from "antd-mobile";
import React, { Component } from "react";
import { StyleSheet, Platform, Text,View } from "react-native";

export default class Propovers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  onSelect = (value) => {
    console.warn(value)
    this.setState({
      visible: false
    });
    this.props.onSelect&&this.props.onSelect(value)
  };

  render() {
    let overlay = this.props.data.map((i, index) => (
      <Popover.Item key={index} value={`option ${i}`}>
        <Text>{i}</Text>
      </Popover.Item>
    ));
    return (
      <Popover
        {...this.props}
        name="m"
        mask={this.props.mask}
        visible={this.state.visible}
        overlay={overlay}
        overlayStyle={[
        
          Platform.OS === "android" && styles.androidOverlayStyle
        ]}
        align={{
          overflow: { adjustY: 0, adjustX: 0 },
      
        }}
        onSelect={this.onSelect}
     
      >
      <View style={[styles.text,this.props.textStyle]}>
        <Text 
          >{this.props.title}</Text>
          </View>
      </Popover>
    );
  }
}

const styles = StyleSheet.create({

  triggerStyle: {
    flexDirection: "row",
    paddingHorizontal: 10,
   
  },
  androidOverlayStyle: {
    borderWidth: 1,
    borderColor: "#ccc"
  },
  text:{
    width:30,
    height:30,
    alignItems:'center',
    justifyContent:'center',
   
  }
});
