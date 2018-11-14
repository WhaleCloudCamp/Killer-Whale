import { Carousel } from "antd-mobile";
import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

export default class Carousels extends React.Component {

  renderItem = (dataItem) => {
    if (this.props.dataItem == null || this.props.dataItem.length === 0) {
      return false;
  }

    return dataItem.map((item, index) => (     
      <Image
      key={index}
        source={{
          uri: item.url
        }}
        style={[{ width: "100%", height: 150 },this.props.imgStyle]}
      />
    
    ));
  }

  render() {
    return (
      <Carousel   
        {...this.props}
      >
          {this.renderItem(this.props.dataItem)}
    
      </Carousel>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
  },

});
