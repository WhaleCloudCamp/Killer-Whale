import React, { Component } from 'react';
import { List } from 'antd-mobile';

export default class Lists extends React.Component {

    render() {
        return (
            <List renderHeader={() => 'basic'}>

                <List.Item data-seed="logId">
                    标题文字点击无反馈，文字超长则隐藏，文字超长则隐藏
          </List.Item>
                <List.Item wrap>
                    文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行
          </List.Item>
                <List.Item disabled extra="箭头向右" arrow="horizontal" onClick={() => { }}>
                    标题文字
          </List.Item>
                <List.Item extra="箭头向下" arrow="down" onClick={() => { }}>
                    标题文字
          </List.Item>
                <List.Item extra="箭头向上" arrow="up" onClick={() => { }}>
                    标题文字
          </List.Item>
                <List.Item extra="没有箭头" arrow="empty">
                    标题文字
          </List.Item>
            </List>
        )
    }
}