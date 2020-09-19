import * as React from 'react';
import { Text, ScrollView, View} from 'react-native';
import { List, Divider } from 'react-native-paper';

const ListPayment = () => (
    <ScrollView>
        <List.Section>
            <Divider/>
            <List.Subheader style={{fontSize: 25, marginHorizontal: -15 }}>Last Recharges</List.Subheader>
            <Divider/>

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <List.Item titleStyle={{fontSize: 20, fontWeight: '700'}} left={() => <Text style={{fontSize: 20}}>Netflix</Text>} />
            <Text style={{fontSize: 16, marginTop: 10, marginRight: 30}}>$500 - 15/09</Text>
            </View>

            <Divider/>

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <List.Item
            titleStyle={{fontSize: 20, fontWeight: '700'}}
            left={() => <Text style={{fontSize: 20}}>Steam</Text>}
            />
            <Text style={{fontSize: 16, marginTop: 10, marginRight: 30}}>$1400 - 16/09</Text>
            </View>
            
            <Divider/>

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <List.Item
            titleStyle={{fontSize: 20, fontWeight: '700'}}
            left={() => <Text style={{fontSize: 20}}>Movistar</Text>}
            />
            <Text style={{fontSize: 16, marginTop: 10, marginRight: 30}}>$1800 - 15/09</Text>
            </View>

            <Divider/>

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <List.Item
            titleStyle={{fontSize: 20, fontWeight: '700'}}
            left={() => <Text style={{fontSize: 20}}>Movistar</Text>}
            />
            <Text style={{fontSize: 16, marginTop: 10, marginRight: 30}}>$1800 - 15/09</Text>
            </View>

            <Divider/>

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <List.Item
            titleStyle={{fontSize: 20, fontWeight: '700'}}
            left={() => <Text style={{fontSize: 20}}>Movistar</Text>}
            />
            <Text style={{fontSize: 16, marginTop: 10, marginRight: 30}}>$1800 - 15/09</Text>
            </View>

            <Divider/>

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <List.Item
            titleStyle={{fontSize: 20, fontWeight: '700'}}
            left={() => <Text style={{fontSize: 20}}>Movistar</Text>}
            />
            <Text style={{fontSize: 16, marginTop: 10, marginRight: 30}}>$1800 - 15/09</Text>
            </View>

            <Divider/>

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <List.Item
            titleStyle={{fontSize: 20, fontWeight: '700'}}
            left={() => <Text style={{fontSize: 20}}>Movistar</Text>}
            />
            <Text style={{fontSize: 16, marginTop: 10, marginRight: 30}}>$1800 - 15/09</Text>
            </View>
        </List.Section>
    </ScrollView>
);

export default (ListPayment);