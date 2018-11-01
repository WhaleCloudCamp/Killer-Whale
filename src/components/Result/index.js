import { Result } from 'antd-mobile';
import 'antd-mobile/lib/Result/style';
import React, { Component } from 'react';

const myImg = src => <img src={src} className="spe am-icon am-icon-md" alt="" />;
export default class Results extends React.Component{
    
     render(){
         return(
             <Result
             img={myImg(this.props.img)}
             title ={this.props.title}
             message ={this.props.message}
             buttonText ={this.props.buttonText}
             buttonType ={this.props.buttonType}
             >
             </Result>
         )
     }

};