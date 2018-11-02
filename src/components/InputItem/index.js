import { InputItem } from 'antd-mobile';
import 'antd-mobile/lib/input-item/style';
import React, { Component } from 'react'

export default class InputItems extends React.Component {

    render() {
        return (
            <InputItem
                type={this.props.type}
                clear={this.props.clear}
                error={this.props.error}
                value={this.props.value}
                extra={this.props.extra}
                editable={this.props.editable}
                placeholder={this.props.placeholder}
            >
                标签
             </InputItem>
        )
    }
}
