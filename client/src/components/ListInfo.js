import * as React from 'react';
import { Text, Button } from 'react-native';
import { List, Divider } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const ListInfo = () => (
  <List.Section style={{ backgroundColor: '#00296B', borderRadius: 10, width: '90%' }}>
    <List.Subheader style={{ fontSize: 20, marginHorizontal: 10, color: 'white' }}>Options</List.Subheader>
    <Divider />

    <List.Item
      title="Ways of loading"
      titleStyle={{ fontSize: 18, fontWeight: '700', color: 'white' }} 
      left={() => <FontAwesome name={'plus'} 
      size={30} 
      style={{ marginHorizontal: 20, color: 'white', alignSelf: 'center',marginTop: 15 }} />} 
      />
    <Text style={{ fontSize: 14, marginLeft: 80, color: 'white' }}>By transfer or cash</Text>
    <Divider />
    <List.Item
      title="Security"
      titleStyle={{ fontSize: 18, fontWeight: '700', color: 'white' }}
      left={() => <FontAwesome name={'lock'} size={30} style={{ marginHorizontal: 20, color: 'white', alignSelf: 'center',marginTop: 15 }} />}
    />
    <Text style={{ fontSize: 14, marginLeft: 80, color: 'white' }}>Create or change your passwords</Text>
    <Divider />
    <List.Item
      title="Cash withdrawal"
      titleStyle={{ fontSize: 18, fontWeight: '700', color: 'white' }}
      left={() => <FontAwesome name={'dollar'} size={30} style={{ marginHorizontal: 20, color: 'white', alignSelf: 'center',marginTop: 15 }} />}
    />
    <Text style={{ fontSize: 14, marginLeft: 80, color: 'white' }}>Link $25000 - Banelco $50000</Text>
  </List.Section>
);

export default (ListInfo);