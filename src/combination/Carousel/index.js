import { Carousel } from 'antd-mobile';
import 'antd-mobile/lib/carousel/style';
import React from 'react'
import { View,StyleSheet,Text,Image } from 'react-native';

export default class Carousels extends React.Component {

    render() {
        return (

           
                <Carousel
                    style={styles.wrapper}
                    selectedIndex={0}
                    vertical= {this.props.vertical}
                    autoplay = {this.props.autoplay}
                    infinite = {this.props.infinite}
                    autoplayInterval = {this.props.autoplayInterval}
                    infinite = {this.props.infinite}
                    dots= {this.props.dots}
                >
                   <Image source ={{uri:'https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png'}} style={{width:'100%',height:150}}></Image>
                   <Image source ={{uri:'https://zos.alipayobjects.com/rmsportal/TekJlZRVCjLFexlOCuWn.png'}} style={{width:'100%',height:150}}></Image>
                   

                </Carousel>


       
        )
    }


}

const styles  = StyleSheet.create({
    wrapper:{
        backgroundColor: '#fff',
    },
    containerHorizontal: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
      },
})