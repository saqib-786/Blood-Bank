import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import{View, Text,TextInput, TouchableOpacity, StyleSheet,Image} from 'react-native';
import { Button } from 'react-native-elements';
import {useState} from 'react';
import ImagePicker from 'react-native-image-picker';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';





function UserName({route,navigation}){
    let [name, setName] = useState('');
    let [msg, setMsg] = useState('');
    let [gender, setGender] = useState('');
    const nameFunction=()=>{
        let rjx = /^[a-zA-Z]+$/;
        if(!rjx.test(name)){
            setMsg('Please provide valid name')
        }
        if(name.length == ' ' && gender == ''){
            setMsg('Name & gender required');
        } if(name.length<2 && gender.length <2){
            setMsg('Invalid Entry')
        }
        else{
            navigation.navigate('User Address',{userNum:userNum,usertype: usertype,userDetails: userDetails, userName:name, userGender: gender});
            

        }
        
    }
    
    const {userNum} = route.params;
    const {usertype} = route.params;
    const {userDetails} = route.params;
    
    
    const options = {
        title: 'Select Avatar',
        customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
      const imagePicker=()=>{
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };
          
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
              console.log(source)
          
            }
          });
      }
 return(
        <>
 <View style={styles.cameraView}>
    
 </View>
 <View style={styles.errorView}><Text style={styles.errorText}>{msg}</Text></View>

 <View style={styles.naneView}>
 <Input maxLength={5} keyboardType="default"  onChangeText={(e)=>setName(e)} keyboardType='default' placeholder="Full Name"/>
    <Input maxLength={5} keyboardType="default"  onChangeText={(e)=>setGender(e)} keyboardType='default' placeholder="Gender"/>

 </View>
 <View style={styles.btnView}>
     <TouchableOpacity onPress={nameFunction} style={styles.btn}>
         <Text style={styles.btnText}>Continue</Text>
     </TouchableOpacity>
 </View>
 </>   

    )
}
const styles =StyleSheet.create({
    naneView:{
        flex: 1,
        position: 'relative',
        top: 40
    },
    btnView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
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
      cameraView:{
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          
      },
      errorView:{
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          top: 40
      },
      errorText:{
          color: 'red'
      }

})

export default UserName