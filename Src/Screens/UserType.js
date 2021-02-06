import React from 'react';
import {View,  TouchableOpacity,StyleSheet, Selection,Option,Picker }from 'react-native';
import { Container, Header, Content, Form, Textarea,Text } from "native-base";
import { useState,  } from 'react';
import {CheckBox} from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import { color } from 'react-native-reanimated';
import { Icon } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/Feather';



function UserType({route,navigation}) {
  let [data, setData] = useState('');
  const [details, setDetails] = useState('');

 let nextScreen=()=>{
    if(data == 'key0' && data == undefined && data == ' ' && details =='' && details== undefined){
      alert('Please Select Type & details First')
    }else{
      navigation.navigate('User Name',{userNum: userNum,usertype: data, userDetails: details})
    }
  
  }
  const {userNum} = route.params
  return(
    <>
    <View>
    <Header />
    <Form>
            <Picker
              note
              mode="dropdown"
              style={{ width: 370 }}
              selectedValue={data}
              onValueChange={setData}
            >
              <Picker.Item label="Select User Type" value="key0" color="blue" fontSize="80" />
              <Picker.Item label="Donor" value="Donor" color="red" />
              <Picker.Item label="Recipient" value="Recipient" color="green" />
            </Picker>
          </Form>
    </View>
    <Text h1 style={{padding: 10, fontSize: 20}}>Further Details</Text>
    <View style={{marginTop:30}}>
    <Textarea onChangeText={setDetails} rowSpan={5} bordered placeholder="Details" />
    </View>
    <View style={style.btnView}>
          <TouchableOpacity onPress={nextScreen}  style={style.btn}>
            <Text style={style.btnText}>Continue</Text>
          </TouchableOpacity>
        </View>
    </>
  )
}
const style=StyleSheet.create({
  btn:{
    display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#0A60FF',
        height: 50,
        width: 300,
        color: '#fff',
        borderTopEndRadius: 5,
        borderTopLeftRadius: 5,
        borderBottomEndRadius: 5,
        borderBottomLeftRadius: 5
  },
  btnText:{
    color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'uppercase',
  },
  btnView:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  fontSize:{
    fontSize: 20
  }
})
export default UserType