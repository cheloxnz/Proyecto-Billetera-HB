// import React from 'react';
// import { StyleSheet, Text, View, ScrollView } from 'react-native';
// import { Divider } from 'react-native-paper';

// const TransferScrollView = ({transfers}) =>  { 
  
//   /*useEffect(() => {
//   getAllContacts(onlineUser.id)
//   },[onlineUser])
//   console.log(getAllContacts)*/

//   return  (
//       <ScrollView style={styles.contentHijoDos}>
//          {/* <View style={styles.contentMov}>
//              <Text style={styles.servicio}>Netflix</Text>
//              <Text style={styles.gastos}>- $500</Text>
//          </View>
//          <Divider /> */}
//          {transfers.map((t) => <View style={styles.contentMov}>
//             <Text style={styles.servicio}>Netflix</Text>
//             <Text style={styles.gastos}>- $500</Text>
//             <Divider />
//           </View>
//          )}
//       </ScrollView>
//   )
// };

// const styles = StyleSheet.create({
//   contentHijoDos: {
//     width: '70%',
//     height: '30%',
//     marginTop: 10,
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//     backgroundColor: 'white',
//     marginHorizontal: 80
//   },
//   contentMov: {
//     width: '100%',
//     marginTop: 10,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 10
//   },
//   servicio: {
//     fontSize: 18,
// },
// gastos: {
//   color: 'red'
// },
// })

// // const mapDispatchToProps = dispatch => {
// //   return {
// //     getAllContacts: (id) => dispatch(getAllContacts(id)),
// //     getAllUsers: () => dispatch(getAllUsers())
// //   }
// // }

// // const mapStateToProps = state => {
// //   return {
// //     onlineUser: state.onlineUser,
// //     /*contacts: state.contacts,*/
// //   }
// // }
// export default (TransferScrollView);
