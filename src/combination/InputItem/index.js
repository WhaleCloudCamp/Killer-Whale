import { InputItem } from 'antd-mobile';
import 'antd-mobile/lib/input-item/style';
import React, { Component } from 'react'
import { Text, Image } from 'react-native';

export default class InputItems extends React.Component {

    render() {
        return (
            <InputItem
                {...this.props}
            >
                {
                    this.props.showType ? (<Image source={{ uri: this.props.imgUrl }} style={{ width: 25, height: 25 }}></Image>) : (
                        <Text>{this.props.title}</Text>
                    )
                }

            </InputItem>
        )
    }
}
