import { Tabs, Badge } from 'antd-mobile';
import 'antd-mobile/lib/tabs/style';
import 'antd-mobile/lib/badge/style';
import React from 'react';
import { View,Text } from 'react-native';

const tabs = [
    { title: <Badge text={'3'}>首页</Badge> },
    { title: <Badge text={'今日(20)'}>热点</Badge> },
    { title: <Badge dot>发现</Badge> },
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
                   <Text>页面一</Text>
               </View>

                <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                  
                <Text>页面二</Text>
              
                </View>
                <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                <Text> 页面三</Text>
              
               
                </View>
            </Tabs>
        )
    }

}

