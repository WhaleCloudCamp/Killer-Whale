import { Switch } from 'antd-mobile'
import 'antd-mobile/lib/Switch/style';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class SwitchItem extends React.Component {

    render() {
        return (
            <View style={styles.main}>
                <Text style={{flex:1,marginLeft:10,fontSize:15}}>
                    {this.props.title}
                </Text>
                <Switch
                    {...this.props}
                >
                </Switch>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    main: {
        flex:1,
        flexDirection: 'row',
        alignItems:'center',
        
    }
})