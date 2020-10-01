import * as React from 'react';
import { Text, ScrollView, View } from 'react-native';
import { List, Divider } from 'react-native-paper';
import { getTransfersAll } from '../actions';
import { connect } from 'react-redux'

const ListPayment = ({getTransfersAll, transfersAll, onlineUser}) => {
    React.useEffect(() => {
        getTransfersAll(onlineUser.Naccount)
    },[])
    return (

<ScrollView>
        <List.Section style={{ width: '90%', backgroundColor: '#f4f4f4', borderRadius: 10, marginTop: 10 }}>
            <List.Subheader style={{ fontSize: 25, textAlign: 'center', backgroundColor: 'yellow'}}>Last Recharges</List.Subheader>
            <Divider />
            <Divider />

            {transfersAll?.map((t) => { if (t.Type === 'payment') {
                return (
                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                        <List.Item
                            titleStyle={{ fontSize: 20, fontWeight: '700' }}
                            left={() => <Text style={{ fontSize: 20 }}>{t.nombreReceptor}</Text>}
                        />
                        <Text style={{ fontSize: 16, marginTop: 10, marginLeft: 50, fontWeight: 'bold', textAlign:'right'}}>          ${t.Quantity} | {t.createdAt.substr(5,5)}</Text>


        
                    <Divider />
                    </View>

                )
            }
            })}

        </List.Section>
    </ScrollView>

    )
    
    };

const mapStateToProps = state => {
    return {
        transfersAll: state.transfersAll,
        onlineUser: state.onlineUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTransfersAll: (id) => dispatch(getTransfersAll(id)),
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (ListPayment);