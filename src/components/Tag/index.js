import {Tag} from 'antd-mobile';
import 'antd-mobile/lib/tag/style';
import React, { Component } from 'react';
import PropTypes from 'prop-types'


export default class Tags extends React.Component{

    static propTypes = {
        content: PropTypes.string,
    }
    render(){
        return(
  
                <Tag
                small={this.props.samll}
                disabled={this.props.disabled}
                closable={this.props.closable}
                selected={this.props.selected}
                >
                  {this.props.content}
                </Tag>
            
        )
    }
}




