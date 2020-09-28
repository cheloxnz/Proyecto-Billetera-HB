import React from 'react';
import { ScrollView, View, Text, StyleSheet, TextInput } from 'react-native';
import {Button} from 'react-native-elements';
import { Divider } from 'react-native-paper';
import Input from './TextInput';
import FontAwesome from 'react-native-vector-icons/FontAwesome'



const Personal = ({dates}) => {
    const [inputs, setInputs] = React.useState('')
    const handleOnChange = (e) => {
       setInputs({
         })
         console.log(e)
     }
     console.log(inputs)
    return (
        <View>
            <View style={{ width: '48%', flexDirection: 'row' }}>
                <Input
                    style={styles.inputPersonal}
                    label='Name'
                    placeholder=''
                    value = {dates.name}
                    onChange = {(e) => handleOnChange(e)}

                />
                <Input
                    style={styles.inputPersonal}
                    label='Surname'
                    placeholder=''
                    value= {dates.surname}
                />
            </View>
            <Divider />
            <View style={{ width: '48%', flexDirection: 'row' }}>
                <Input
                    style={styles.inputPersonal}
                    label='Username'
                    placeholder=''
                    value= {dates.username}
                />
                <Input
                    style={styles.inputPersonal}
                    label='Email'
                    placeholder=''
                    value= {dates.email}
                />
                <FontAwesome name='edit' size={25} color={'white'} style={{ marginTop: 30, marginRight: 35 }} />
            </View>
            <Divider />
            <View style={{ width: '48%', flexDirection: 'row' }}>
                <Input
                    style={styles.inputPersonal}
                    label='Date of birth'
                    placeholder=''
                    value= {dates.birthDate}
                />
                <Input
                    style={styles.inputPersonal}
                    label='Phone'
                    placeholder=''
                    value= {dates.phone}
                />
                <FontAwesome name='edit' size={25} color={'white'} style={{ marginTop: 30, marginRight: 35 }} />
            </View>
            <Divider />
            <View style={{ width: '48%', flexDirection: 'row' }}>
                <Input
                    style={styles.inputPersonal}
                    label='DNI'
                    placeholder=''
                    value= {dates.dni}
                />
                <Input
                    style={styles.inputPersonal}
                    label='Postal Code'
                    placeholder=''
                    value= {dates.postalCode}
                />
            </View>
            <Divider />
            <View style={{ width: '48%', flexDirection: 'row' }}>
                <Input
                    style={styles.inputPersonal}
                    label='City'
                    placeholder=''
                    value= {dates.city}
                />
                <Input
                    style={styles.inputPersonal}
                    label='Province'
                    placeholder=''
                    value= {dates.province}
                />
            </View>
            <Divider />
            <View style={{ width: '50%', flexDirection: 'row' }}>
                <Input
                    style={styles.inputPersonal}
                    label='Address'
                    placeholder=''
                    value= {dates.address}
                />
                <FontAwesome name='edit' size={25} color={'white'} style={{ marginTop: 30, marginRight: 35 }} />
            <Button
                title="Add a friend"
                type="clear"
                titleStyle={{ color: 'yellow', fontSize: 18 }}
                containerStyle={{ borderRadius: 10, backgroundColor: 'black', width: '50%', height:'80%', marginTop: 10}}
                onPress={() => updateDates(dates)}
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