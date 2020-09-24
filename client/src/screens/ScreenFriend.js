import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Button, TextInput } from 'react-native';
import NavBar from '../components/NavBar';
import FooterNew from '../components/FooterNew';
import Constants from 'expo-constants';


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
                    <View style={{ borderBottomColor: 'white', borderBottomWidth: 1 }}>
                        <Text style={{ color: 'white', fontSize: 18, textAlign: 'left', marginTop: 20, marginLeft: 20 }}>
                            New recipient
                        </Text>
                    </View>
                    <View style={{ borderBottomColor: 'white', borderBottomWidth: 3 }}>
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
                    <View style={{ width: '100%', flexDirection: 'row' }}>
                        <View style={{ width: '40%', marginVertical: 20, marginHorizontal: 40 }}>
                            <Text style={{ color: 'white' }}>
                                CVU {'=>'}
                            </Text>
                        </View>
                        <TextInput
                            textContentType='Enter CVU'
                        />
                    </View>
                </View>
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