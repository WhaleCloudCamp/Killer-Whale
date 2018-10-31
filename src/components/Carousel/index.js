import { Carousel } from 'antd-mobile';
import 'antd-mobile/lib/carousel/style';
import React from 'react'
import { View,StyleSheet,Text } from 'react-native';

export default class Carousels extends React.Component {

    render() {
        return (

            <View style={this.props.style}>
                <Carousel
                    style={styles.wrapper}
                    selectedIndex={0}
                    vertical= {this.props.vertical}
                    autoplay = {this.props.autoplay}
                    infinite = {this.props.infinite}
                    autoplayInterval = {this.props.autoplayInterval}
                    infinite = {this.props.infinite}

                >
                    <View style={[styles.containerHorizontal, { backgroundColor: 'red' }]}>
                        <Text>Carousel 1</Text>
                    </View>
                    <View style={[styles.containerHorizontal, { backgroundColor: 'blue' }]}>
                        <Text>Carousel 2</Text>
                    </View>

                </Carousel>


            </View>
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