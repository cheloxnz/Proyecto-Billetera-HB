import * as React from 'react';
import { View, Text } from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const MyMenu = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View
        style={{
          width: '100%',
          height: '60%',
          backgroundColor: 'yellow',
          paddingTop: 6,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}><FontAwesome name={'bars'} size={35} style={{color: 'black'}} /></Button>}>
          <Menu.Item onPress={() => {}} title="Item 1" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu>
        <View
        style={{
          width: '60%',
          alignItems: 'flex-start',
        }}
        >
          <Text 
          style={{
            fontSize: 25,
            marginVertical: 8          
          }}
          >
              My Payments
          </Text>
        </View>
      </View>
    </Provider>
  );
};

export default (MyMenu);