import { Radio } from 'antd-mobile'
import 'antd-mobile/lib/radio/style';
import React, { Component } from 'react'
import { View, Text, StyleSheet,Image } from 'react-native';

export default class RadioItem extends React.Component {

    
    render() {
        return (
            <View style={styles.main}>
               {
                   this.props.showImg?( <Image style={styles.img} ></Image>):(null)
               }
               
                <Text style={styles.text}>
                    {this.props.title}
                </Text>
                <Radio
                    {...this.props}
                >
                </Radio>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    img:{
        width:20,
        height:20,
        backgroundColor:'pink',
        marginLeft:10
    },
    text:{
        flex: 1, 
        marginLeft: 10, 
        fontSize: 15
    }
})