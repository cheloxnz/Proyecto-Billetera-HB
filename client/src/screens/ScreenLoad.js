import React, { useState } from 'react';
import { connect } from 'react-redux'
import { View, StyleSheet, Button, Text, ImageBackground } from 'react-native';
import Modal from 'react-native-modal';
import NavBar from '../components/NavBar';
import FooterNew from '../components/FooterNew';

const ModalTester = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={{ width: '100%', height: '100%', alignItems: 'center' }}>
            <NavBar navigation={navigation} />

            <ImageBackground
                source={require('../assets/consolidated_dot.png')}
                style={styles.background}
            >
                <View style={styles.contenedorModal}>
                    <Text style={{ color: 'white', fontSize: 25, marginTop: 16 }}>
                        You can generate a random code, and go to the closest participating store.
                    </Text>
                    <Modal isVisible={isModalVisible} style={{ marginHorizontal: 200, marginVertical: 100 }}>
                        <View style={styles.contenedorHide}>
                            <Text style={{ fontSize: 20, color: 'white', marginBottom: 10, textAlign: 'center' }}>Your code is 46562356</Text>

                            <Button title="Close" onPress={toggleModal} />
                        </View>
                    </Modal>
                    <View style={styles.contenedorGenerate}>
                        <Button title="Generate code" onPress={toggleModal} style={{ marginTop: 40 }} />
                    </View>

                </View>
            </ImageBackground>

            {/* FOOTER VA EN TODOS LOS SCREEN  */}
            <FooterNew navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
    },
    contenedorModal: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    contenedorHide: {
        marginRight: '100'
    }
})

export default ModalTester;