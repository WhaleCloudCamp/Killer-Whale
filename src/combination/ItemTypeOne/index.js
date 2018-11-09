import React from 'react'
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';
import icon from '../../assets/home_package_tittle.png'


export default class ItemTypeOne extends React.Component {

    // rendItem = (dataItem) => {

    //     return data.map((item, i) => (
    //         <View
    //             style={[styles.centertag, this.props.centertag]}
    //         >
    //             <Text style={[styles.centertagTitleStyle, this.props.centertagTitleStyle]} >{item.title}</Text>
    //         </View>


    //     ));
    // }

    render() {
        return (
            <View>

                <View style={styles.secondaryStyle}>
                    <Image
                        source={this.props.icon || icon}
                        style={styles.img}
                    ></Image>

                    <Text >{this.props.title}</Text>
                    <View
                        style={[styles.tag, this.props.tag]}
                    >
                        <Text style={[styles.tagTitleStyle, this.props.tagTitleStyle]} onPress={this.props.onDeatils && this.props.onDeatils()}>{this.props.tagTitle}</Text>
                    </View>

                </View>

               

            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {

    },
    secondaryStyle: {
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    img: {
        width: 20,
        height: 20,
        margin: 5
    },
    tag: {
        borderWidth: 1,
        borderColor: '#FFC76F',
        borderRadius: 5,
        margin: 5
    },
    tagTitleStyle: {
        color: '#FFC76F',
        padding: 3,
        fontSize: 13
    },
    center: {
        flexDirection: 'row',
        flexWrap: 'wrap'

    },
    centertag: {
        borderWidth: 1,
        borderColor: '#02C558',
        borderRadius: 5,
        margin: 5
    },
    centertagTitleStyle: {
        color: '#02C558',
        padding: 3,
        fontSize: 12
    },

})