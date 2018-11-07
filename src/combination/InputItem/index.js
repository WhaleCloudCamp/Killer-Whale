import { InputItem } from 'antd-mobile';
import 'antd-mobile/lib/input-item/style';
import React, { Component } from 'react'
import { Text, Image } from 'react-native';
import PropTypes from 'prop-types';

export default class InputItems extends React.Component {


    render() {
        return (
            <InputItem
                {...this.props}

            >
                {
                    this.props.showtype === 2 ? (<Image source={{ uri: this.props.imgurl }} style={{ width: 25, height: 25 }}></Image>) : (
                        <Text>{this.props.title}</Text>
                    )
                }

            </InputItem>
        )
    }
}
