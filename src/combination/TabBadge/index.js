import { Tabs, Badge } from 'antd-mobile';
import 'antd-mobile/lib/tabs/style';
import 'antd-mobile/lib/badge/style';
import React from 'react';
import { View,Text } from 'react-native';

const tabs = [
    { title: <Badge text={'3'}>First Tab</Badge> },
    { title: <Badge text={'今日(20)'}>Second Tab</Badge> },
    { title: <Badge dot>Third Tab</Badge> },
];
export default class TabBadge extends React.Component {


    render() {
        return (
            <Tabs tabs={tabs}
                initialPage={1}
                onChange={(tab, index) => { console.log('onChange', index, tab); }}
                onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
            >
                <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                   <Text>Content of first tab</Text>
               </View>

                <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                  
                <Text>Content of second tab</Text>
              
                </View>
                <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                <Text> Content of third tab</Text>
              
               
                </View>
            </Tabs>
        )
    }

}

