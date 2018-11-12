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
        style={{ width: "100%", height: 150 }}
      />
    
    ));
  }

  render() {
    return (
      <Carousel
        style={styles.wrapper}
        selectedIndex={0}
        vertical={this.props.vertical}
        autoplay={this.props.autoplay}
        infinite={this.props.infinite}
        autoplayInterval={this.props.autoplayInterval}
        infinite={this.props.infinite}
        dots={this.props.dots}
      >
        
          {this.renderItem(this.props.dataItem)}
    
      </Carousel>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff"
  },
  containerHorizontal: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 150
  }
});
