import { Result } from "antd-mobile";
import React, { Component } from "react";
import AlipayImg from '../../assets/alipay.png'


export default class Results extends React.Component {
  render() {
    return (
      <Result
    
      {...this.props}
      imgUrl={this.props.AlipayImg?(this.props.AlipayImg):(AlipayImg)}
      />
    );
  }
}
