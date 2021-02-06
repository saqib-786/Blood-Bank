import React from 'react';
import{View, Text,TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import {useState} from 'react';
import database from '@react-native-firebase/database';





function UserAdress({route,navigation}) {
    
    let [email, setEmail] = useState('');
    let [address, setAddress] = useState('');
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let [msg, setMsg] = useState('');
    const userAddress=()=>{
        
        if(email.match(pattern) && address.length >= 20){
            navigation.navigate('Blood Group',{userNum: userNum, usertype:usertype,userDetails:userDetails,userName:userName,userGender:userGender,
            userEmail: email, userAddress: address});
            
            
        }else{
            
            setMsg('Please enter valid email & address');
        }
    }
    const {userNum} = route.params;
    const {usertype} = route.params;
    const {userDetails} = route.params;
    const {userName} = route.params;
    const {userGender} = route.params;

 return(
    <>
    <View style={styles.addreeView}>
       <Input textContentType='fullStreetAddress'  onChangeText={(e)=>setEmail(e)}  keyboardType='email-address' placeholder="Email ID" />
        <Input textContentType='emailAddress'  onChangeText={(e)=>setAddress(e)} placeholder="Address"/>
    </View>
    <View style={styles.errorView} >
        <Text style={{color:'red'}}>{msg}</Text>
    </View>
    <View style={styles.btnView}>
        <TouchableOpacity onPress={userAddress} style={styles.btn}>
            <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
    </View>
    </>   
 )
}
const styles =StyleSheet.create({
    addreeView:{
        flex: 1,
        position: 'relative',
        top: 20
    },
    btnView:{
        flex: 2,
        justifyContent:'center',
        alignItems: 'center'
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
    errorView:{
        justifyContent: 'center',
        alignItems: 'center'
    }

})

export default UserAdress