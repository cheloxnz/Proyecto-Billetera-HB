import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import NavBar from '../components/NavBar';
import FooterNew from '../components/FooterNew';
import Constants from 'expo-constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const ScreenFriend = ({ navigation }) => {
    return (
        <ImageBackground
            source={require('../assets/consolidated_dot.png')}
            style={styles.background}>
            <View style={styles.contenedorAgregar}>
                <NavBar navigation={navigation} />
                <View style={styles.contenedorSecAgregar}>
                    <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', marginTop: 30 }}>
                        Here you can add friends through username
                    </Text>
                    <View style={{ borderBottomColor: 'yellow', borderBottomWidth: 1 }}>
                        <View style={{ width: '100%', flexDirection: 'row', marginHorizontal: 50 }}>
                            <View style={{ width: '40%', marginVertical: 30, marginRight: 10 }}>
                                <Button
                                    title='By Username'
                                    color='#00296B'
                                    accessibilityLabel="Add user by CVU"
                                />
                            </View>
                            <View style={{ width: '40%', marginVertical: 30 }}>
                                <Button
                                    title='Account Henry Bank'
                                    color='#00296B'
                                    accessibilityLabel="Add user by account HB"
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{ width: '40%', marginTop: 12, borderBottomColor: 'yellow', borderBottomWidth: 3, paddingTop: 20, paddingBottom: 20 }}>
                            <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', paddingTop: 6 }}>
                                Username  <FontAwesome name='angle-double-right' size={26} color={'white'} />
                            </Text>
                        </View>
                        <View style={{ width: '60%', marginTop: 12, borderBottomColor: 'yellow', borderBottomWidth: 3, paddingTop: 20, paddingBottom: 20 }}>
                            <Input
                                inputStyle={{ backgroundColor: 'white', width: 150 }}
                                placeholder='Enter username'
                            />
                        </View>
                    </View>
                    <Text style={{ color: '#F2F2F2', fontSize: 18, textAlign: 'center', marginTop: 20 }}>
                        Enter the 22 digits of the CVU without spaces or hyphens
                    </Text>
                </View>
                <TouchableOpacity style={{ width: '100%', marginBottom: 40, alignItems: 'center' }}>
                    <Text style={{ width: '80%', textAlign: 'center', color: 'white', fontSize: 20, backgroundColor: '#00296B', padding: 8 }}>
                        Verify
                    </Text>
                </TouchableOpacity>
                <FooterNew navigation={navigation} />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
    },
    contenedorAgregar: {
        width: "100%",
        height: "100%",
        paddingTop: Constants.statusBarHeight,
    },
    contenedorSecAgregar: {
        width: '100%',
        height: '100%',
        flex: 1
    }
})

export default ScreenFriend;