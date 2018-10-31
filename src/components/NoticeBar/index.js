import { NoticeBar } from 'antd-mobile';
import React, { Component } from 'react';

export default class NoticeBars extends React.Component {

    render() {
        return (
            <NoticeBar
                mode={this.props.mode}
                marqueeProps={this.props.marqueeProps}
            >
              {this.props.titles}
          </NoticeBar>
        )
    }

}
