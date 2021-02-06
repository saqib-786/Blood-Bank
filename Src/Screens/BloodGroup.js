import React from 'react';
import{View, TextInput, TouchableOpacity, StyleSheet, Image, CheckBox, Picker} from 'react-native';
import  { useState, Component } from 'react';
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import database from '@react-native-firebase/database';
import { Container, Header, Content, Form } from "native-base";







  
  const UserBlood = ({route,navigation}) => {

   let [data, setData]= useState('');
   let [msg, setMsg] = useState('');

    let nextScreen=()=>{
      if(data == 'key0' && data == undefined && data == ' '){
        setMsg('Please select blood group first');
        msg= ' ';
      }else{
        let createUser={
          userNum: userNum,
          usertype: usertype,
          userDetails: userDetails,
          userName: userName,
          userGender: userGender,
          bloodGroup: data,
          userEmail: userEmail,
          userAddress: userAddress
        }
        database().ref('/').child('Users').push(createUser)
        .then(()=>{
          navigation.navigate('Donors')
        }).catch((error)=>{
          var errorCode = error.code;
          var errorMsg = error.msg
          console.log(errorMsg)

        })
        
      }
      
    }
  
  const {userNum} = route.params;
  const {usertype} = route.params;
  const {userDetails} = route.params;
  const {userName} = route.params;
  const {userGender} = route.params;
  const {userEmail} = route.params;
  const {userAddress} = route.params;

  


  
 return(
    <>
    <Header/>
 <View>
 <Form>
            <Picker
              note
              mode="dropdown"
              style={{ width: 370 }}
              selectedValue={data}
              onValueChange={setData}
            >
              <Picker.Item label="Select Blood Group" value="key0" color="blue" fontSize="80" />
              <Picker.Item label="O Positive" value="O Posivtive" color="red" />
              <Picker.Item label="O Nagitive" value=" 0Nagitive" color="red" />
              <Picker.Item label="A Positive" value="A Positive" color="red" />
              <Picker.Item label="A Nagitive" value=" A Nagitive" color="red" />
              <Picker.Item label="B Positive" value="B Positive" color="red" />
              <Picker.Item label="B Nagitive" value=" B Nagitive" color="red" />
              <Picker.Item label="AB Positive" value="AB Positive" color="red" />
              <Picker.Item label="AB Nagitive" value="AB Nagitive" color="red" />
            </Picker>
          </Form>
    
    <View style={styles.msgView}>
      <Text style={{color: 'red', fontSize: 18}}>{msg}</Text>
    </View>
</View>
<View btnView>
  <TouchableOpacity onPress={nextScreen} style={styles.btn}>
    <Text style={styles.btnText}>Continue</Text>
  </TouchableOpacity>
</View>

    </>   
 )
}
const styles =StyleSheet.create({
  imageview:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  bloodView:{
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    
  },
  btnView:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    

  },
  btn:{
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor:'#0A60FF',
        height: 50,
        width: 300,
        borderTopEndRadius: 5,
        borderTopLeftRadius: 5,
        borderBottomEndRadius: 5,
        borderBottomLeftRadius: 5,
        position: 'relative',
        top: 250,
        left: 30
  },
  btnText:{
    color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'uppercase',
  },
  groupView:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnView:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 150,
  },
  msgView:{
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: 80
  }
})

export default UserBlood
