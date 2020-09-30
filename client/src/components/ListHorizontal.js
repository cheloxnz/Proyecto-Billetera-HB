import * as React from 'react';
import { View, ScrollView, Text, TouchableHighlight, TouchableOpacity} from 'react-native';
import { Avatar } from 'react-native-paper';
import { payment } from '../actions';
import { connect } from 'react-redux';

const ListHorizontal = ({navigation, payment}) => (

    <View style={{ marginLeft: 10 }}>
        <Text style={{ color: 'white', fontSize: 25, marginBottom: 20, fontWeight:'bold' , textAlign: 'center', width: '90%', alignSelf: 'center'}}>
            The most popular services
        </Text>
        <ScrollView
            horizontal={true}
        >   
              <View>
                  <TouchableOpacity onPress={() => {navigation.navigate('Input Payment'), payment('Phone') }}  >
             
            <Avatar.Icon size={60} icon="phone" style={{ marginRight: 10 }} />
                  </TouchableOpacity>
              </View>
              <View>
                    <TouchableOpacity onPress={() => {navigation.navigate('Input Payment') , payment('DirecTV')}} >

            <Avatar.Icon size={60} icon="television" style={{ marginRight: 10 }} />
                    </TouchableOpacity>

                </View>
            
            <View>
                    <TouchableOpacity onPress={() => {navigation.navigate('Input Payment') , payment('Netflix')}}  >
            <Avatar.Icon size={60} icon="netflix" style={{ marginRight: 10 }} />

                    </TouchableOpacity>

                </View>
            

            <View>
                    <TouchableOpacity onPress={() => {navigation.navigate('Input Payment'), payment('Spotify') }}  >

            <Avatar.Icon size={60} icon="spotify" style={{ marginRight: 10 }} />
                    </TouchableOpacity>

                </View>
            

            <View>
                    <TouchableOpacity onPress={() => {navigation.navigate('Input Payment'), payment('Steam') }}  >

            <Avatar.Icon size={60} icon="steam" style={{ marginRight: 10 }} />
                    </TouchableOpacity>

                </View>
            

            <View>  
                    <TouchableOpacity onPress={() => {navigation.navigate('Input Payment') }}  >
            <Avatar.Icon size={60} icon="folder" style={{ marginRight: 10 }} />

                    </TouchableOpacity>

                </View>

            
        </ScrollView>
    </View>
);


const mapDispatchToProps = dispatch => {
  return {
    payment: (p) => dispatch(payment(p))
  }
}

export default connect(null, mapDispatchToProps) (ListHorizontal);