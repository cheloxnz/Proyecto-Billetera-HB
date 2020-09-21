import * as React from 'react';
import { Text, Button } from 'react-native';
import { List, Divider } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const ListInfo = () => (
  <List.Section style={{ backgroundColor: '#F4F4F4', borderRadius: 10 }}>
    <List.Subheader style={{ fontSize: 25, marginHorizontal: 10, color: 'black' }}>Options</List.Subheader>
    <Divider />

    <List.Item title="Ways of loading" titleStyle={{ fontSize: 20, fontWeight: '700', color: 'black' }} left={() => <FontAwesome name={'plus'} size={30} style={{ marginHorizontal: 20, color: 'black' }} />} />
    <Text style={{ fontSize: 16, marginLeft: 80, color: 'black' }}>By transfer or cash</Text>
    <Divider />
    <List.Item
      title="Security"
      titleStyle={{ fontSize: 20, fontWeight: '700', color: 'black' }}
      left={() => <FontAwesome name={'lock'} size={30} style={{ marginHorizontal: 20, color: 'black' }} />}
    />
    <Text style={{ fontSize: 16, marginLeft: 80, color: 'black' }}>Create or change your passwords</Text>
    <Divider />
    <List.Item
      title="Cash withdrawal"
      titleStyle={{ fontSize: 20, fontWeight: '700', color: 'black' }}
      left={() => <FontAwesome name={'dollar'} size={30} style={{ marginHorizontal: 20, color: 'black' }} />}
    />
    <Text style={{ fontSize: 16, marginLeft: 80, color: 'black' }}>Link $25000 - Banelco $50000</Text>
  </List.Section>
);

export default (ListInfo);