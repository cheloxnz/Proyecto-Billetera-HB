import * as React from 'react';
import { Text , Button} from 'react-native';
import { List, Divider } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const ListInfo = () => (
  <List.Section>
    <List.Subheader style={{fontSize: 25, marginHorizontal: 10}}>Options</List.Subheader>
    <Divider/>

    <List.Item title="Ways of loading" titleStyle={{fontSize: 20, fontWeight: '700'}} left={() => <FontAwesome name={'plus'} size={30} style={{marginHorizontal: 20}}/>} />
    <Text style={{fontSize: 16, marginLeft: 80}}>By transfer or cash</Text>
    <Divider/>
    <List.Item
      title="Security"
      titleStyle={{fontSize: 20, fontWeight: '700'}}
      left={() => <FontAwesome name={'lock'} size={30} style={{marginHorizontal: 20}}/>}
    />
    <Text style={{fontSize: 16, marginLeft: 80}}>Create or change your passwords</Text>
    <Divider/>
    <List.Item
      title="Cash withdrawal"
      titleStyle={{fontSize: 20, fontWeight: '700'}}
      left={() => <FontAwesome name={'dollar'} size={30} style={{marginHorizontal: 20}}/>}
    />
    <Text style={{fontSize: 16, marginLeft: 80}}>Link $25000 - Banelco $50000</Text>
  </List.Section>
);

export default (ListInfo);