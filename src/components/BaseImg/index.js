import React from 'react'
import { Image } from 'react-native';


export default class BaseImg extends React.Component{

    render(){
        return(
            <Image
            resizeMode='contain'
             source={{uri:this.props.url}}
             style={this.props.imgStyle}
            ></Image>
        )
    }
}