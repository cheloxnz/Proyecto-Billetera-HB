import React from 'react';
import { ScrollView, View, Text, StyleSheet, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { Divider } from 'react-native-paper';
import Input from './TextInput';
import FontAwesome from 'react-native-vector-icons/FontAwesome'



const Personal = ({ dates }) => {
    const [inputs, setInputs] = React.useState('')
    const handleOnChange = (e) => {
        setInputs({
        })
        console.log(e)
    }
    console.log(inputs)
    return (
        <View>
            <View style={{ width: '48%', flexDirection: 'row', marginLeft: 10 }}>
                <Input
                    style={styles.inputPersonal}
                    label='Name'
                    placeholder=''
                    value={dates.name}
                    onChange={(e) => handleOnChange(e)}
                    editable={false}


                />
                <Input
                    style={styles.inputPersonal}
                    label='Surname'
                    placeholder=''
                    value={dates.surname}
                    editable={false}
                />
            </View>
            <Divider />
            <View style={{ width: '48%', flexDirection: 'row', marginLeft: 10 }}>
                <Input
                    style={styles.inputPersonal}
                    label='Username'
                    placeholder=''
                    value={dates.username}
                    editable={false}
                />
                <Input
                    style={styles.inputPersonal}
                    label='Email'
                    placeholder=''
                    value={dates.email}
                    editable={false}
                />
            </View>
            <Divider />
            <View style={{ width: '48%', flexDirection: 'row', marginLeft: 10 }}>
                <Input
                    style={styles.inputPersonal}
                    label='Date of birth'
                    placeholder=''
                    value={dates.birthDate}
                    editable={false}
                />
                <Input
                    style={styles.inputPersonal}
                    label='Phone'
                    placeholder=''
                    value={dates.phone}
                />
                {/* <FontAwesome name='edit' size={25} color={'white'} style={{ marginTop: 30, marginRight: 35 }} /> */}
            </View>
            <Divider />
            <View style={{ width: '48%', flexDirection: 'row', marginLeft: 10 }}>
                <Input
                    style={styles.inputPersonal}
                    label='DNI'
                    placeholder=''
                    value={dates.dni}
                    editable={false}
                />
                <Input
                    style={styles.inputPersonal}
                    label='Postal Code'
                    placeholder=''
                    value={dates.postalCode}
                    editable={false}
                />
            </View>
            <Divider />
            <View style={{ width: '48%', flexDirection: 'row', marginLeft: 10 }}>
                <Input
                    style={styles.inputPersonal}
                    label='City'
                    placeholder=''
                    value={dates.city}
                    editable={false}
                />
                <Input
                    style={styles.inputPersonal}
                    label='Province'
                    placeholder=''
                    value={dates.province}
                    editable={false}
                />
            </View>
            <Divider />
            <View style={{ width: '100%', flexDirection: 'row', marginLeft: 10 }}>
                <Input
                    style={styles.inputPersonal}
                    label='Address'
                    placeholder=''
                    value={dates.address}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputPersonal: {
        width: '90%',
        borderRadius: 10
    }
})

export default Personal;