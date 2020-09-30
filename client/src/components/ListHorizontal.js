import * as React from 'react';
import { View, ScrollView, Text, TouchableHighlight, TouchableOpacity} from 'react-native';
import { Avatar } from 'react-native-paper';

const ListHorizontal = ({navigation}) => (

    <View style={{ marginLeft: 10 }}>
        <Text style={{ color: 'white', fontSize: 25, marginBottom: 20, textAlign: 'center' }}>
            The most popular services.
        </Text>
        <ScrollView
            horizontal={true}
        >   
          <View>
                    <TouchableOpacity onPress={() => {navigation.navigate('Home') }}  >
                 <Avatar.Icon size={60} icon="card" style={{ marginRight: 10 }} />

                    </TouchableOpacity>

                </View>
              <View>
                  <TouchableOpacity onPress={() => {navigation.navigate('Home') }}  >
             
            <Avatar.Icon size={60} icon="phone" style={{ marginRight: 10 }} />
                  </TouchableOpacity>
              </View>
              <View>
                    <TouchableOpacity onPress={() => {navigation.navigate('Home') }}  >

            <Avatar.Icon size={60} icon="television" style={{ marginRight: 10 }} />
                    </TouchableOpacity>

                </View>
            
            <View>
                    <TouchableOpacity onPress={() => {navigation.navigate('Home') }}  >
            <Avatar.Icon size={60} icon="netflix" style={{ marginRight: 10 }} />

                    </TouchableOpacity>

                </View>
            

            <View>
                    <TouchableOpacity onPress={() => {navigation.navigate('Home') }}  >

            <Avatar.Icon size={60} icon="spotify" style={{ marginRight: 10 }} />
                    </TouchableOpacity>

                </View>
            

            <View>
                    <TouchableOpacity onPress={() => {navigation.navigate('Home') }}  >

            <Avatar.Icon size={60} icon="steam" style={{ marginRight: 10 }} />
                    </TouchableOpacity>

                </View>
            

            <View>
                    <TouchableOpacity onPress={() => {navigation.navigate('Home') }}  >
            <Avatar.Icon size={60} icon="folder" style={{ marginRight: 10 }} />

                    </TouchableOpacity>

                </View>
            

            <View>
                    <TouchableOpacity onPress={() => {navigation.navigate('Home') }}  >

            <Avatar.Icon size={60} icon="phone" style={{ marginRight: 10 }} />
                    </TouchableOpacity>

                </View>
            
            <View>
                    <TouchableOpacity onPress={() => {navigation.navigate('Home') }}  >
            <Avatar.Icon size={60} icon="television" style={{ marginRight: 10 }} />

                    </TouchableOpacity>

                </View>
            
                <View>
                    <TouchableOpacity onPress={() => {navigation.navigate('Home') }}  >
            <Avatar.Icon size={60} icon="card" style={{ marginRight: 10 }} />

                    </TouchableOpacity>

                </View>
        </ScrollView>
    </View>
);

export default ListHorizontal;