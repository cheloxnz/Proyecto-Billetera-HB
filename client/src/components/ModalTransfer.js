import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import Modal from 'react-native-modal';

function ModalTransfer() {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <Modal>
            <View style={{ flex: 1 }}>
                <Text>Hello!</Text>
            </View>
        </Modal>
    );
}

export default ModalTransfer;