import React from 'react';
import { ScrollView, View, Text, StyleSheet, TextInput } from 'react-native';
import { Divider } from 'react-native-paper';
import Input from './TextInput';
import FontAwesome from 'react-native-vector-icons/FontAwesome'



const Personal = () => {
    return (
        <View>
            <View style={{ width: '48%', flexDirection: 'row' }}>
                <Input
                    style={styles.inputPersonal}
                    label='Name'
                    placeholder=''
                />
                <Input
                    style={styles.inputPersonal}
                    label='Surname'
                    placeholder=''
                />
            </View>
            <Divider />
            <View style={{ width: '48%', flexDirection: 'row' }}>
                <Input
                    style={styles.inputPersonal}
                    label='Username'
                    placeholder=''
                />
                <Input
                    style={styles.inputPersonal}
                    label='Email'
                    placeholder=''
                />
                <FontAwesome name='edit' size={25} color={'white'} style={{ marginTop: 30, marginRight: 35 }} />
            </View>
            <Divider />
            <View style={{ width: '48%', flexDirection: 'row' }}>
                <Input
                    style={styles.inputPersonal}
                    label='Date of birth'
                    placeholder=''
                />
                <Input
                    style={styles.inputPersonal}
                    label='Phone'
                    placeholder=''
                />
                <FontAwesome name='edit' size={25} color={'white'} style={{ marginTop: 30, marginRight: 35 }} />
            </View>
            <Divider />
            <View style={{ width: '48%', flexDirection: 'row' }}>
                <Input
                    style={styles.inputPersonal}
                    label='DNI'
                    placeholder=''
                />
                <Input
                    style={styles.inputPersonal}
                    label='Postal Code'
                    placeholder=''
                />
            </View>
            <Divider />
            <View style={{ width: '48%', flexDirection: 'row' }}>
                <Input
                    style={styles.inputPersonal}
                    label='City'
                    placeholder=''
                />
                <Input
                    style={styles.inputPersonal}
                    label='Province'
                    placeholder=''
                />
            </View>
            <Divider />
            <View style={{ width: '96%', flexDirection: 'row' }}>
                <Input
                    style={styles.inputPersonal}
                    label='Address'
                    placeholder=''
                />
                <FontAwesome name='edit' size={25} color={'white'} style={{ marginTop: 30, marginRight: 35 }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputPersonal: {
        width: '90%',
        borderRadius: 6
    }
})

export default Personal;