import { Stepper } from 'antd-mobile';
import 'antd-mobile/lib/stepper/style';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class StepperItem extends React.Component {

    render() {
        return (
            <View style={styles.main}>
                <Text style={styles.text}>
                    {this.props.title}
                </Text>
                <View>
                <Stepper
                    {...this.props}
                ></Stepper>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginRight:10,
    },
    text: {
        flex: 1,
        fontSize: 15
    }
})