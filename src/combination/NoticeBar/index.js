import { NoticeBar } from "antd-mobile";
import "antd-mobile/lib/notice-bar/style";
import React, { Component } from "react";

export default class NoticeBars extends React.Component {
  render() {
    return <NoticeBar {...this.props}>{this.props.titles}</NoticeBar>;
  }
}
