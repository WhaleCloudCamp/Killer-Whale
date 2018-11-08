import { DatePicker, List } from "antd-mobile";
import React from "react";

export default class DatePickers extends React.Component {
  render() {
    return (
      <DatePicker
        mode={this.props.mode}
        minDate={this.props.minDate}
        maxDate={this.props.maxDate}
        format={this.props.format}
      >
        <List.Item arrow="horizontal">时间选择</List.Item>
      </DatePicker>
    );
  }
}
