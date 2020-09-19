import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { Avatar } from 'react-native-paper';

const ListHorizontal = () => (

    <View>
        <ScrollView
        horizontal={true}
        >
            <Avatar.Icon size={60} icon="card" style={{marginRight: 10}} />
            <Avatar.Icon size={60} icon="phone" style={{marginRight: 10}}/>
            <Avatar.Icon size={60} icon="television" style={{marginRight: 10}}/>
            <Avatar.Icon size={60} icon="netflix" style={{marginRight: 10}}/>
            <Avatar.Icon size={60} icon="spotify" style={{marginRight: 10}}/>
            <Avatar.Icon size={60} icon="steam" style={{marginRight: 10}}/>
            <Avatar.Icon size={60} icon="folder" style={{marginRight: 10}}/>
        </ScrollView>
    </View>
        );

export default ListHorizontal;