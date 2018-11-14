import React from 'react'
import { Text,Image,View,TouchableHighlight,ScrollView ,TextInput} from 'react-native';
import imgClose from '../../assets/dark_close.png'

export default class DialogTwo extends React.Component {

    render() {

        return (
            <View style={this.props.mainStyle}>

                <View style={[{flexDirection:'row'},this.props.secondStyle]}>
                    <Text style={this.props.titleStyle}>
                      {this.props.title}
                    </Text>
                    <TouchableHighlight
                       onPress={this.onCancel&&this.onCancel()}
                      >
                      <Image  
                      source ={this.props.imgClose ||imgClose}
                      style={this.props.imgStyle}
                    ></Image>
                      </TouchableHighlight>
                  
                </View>
           
                 <TextInput 
                 multiline = {true}
                  value={this.props.contentText}
                  editable={false}
                 style={this.props.contentStyle}>
                   
                 </TextInput>
                 
            </View>
        )
    }

}