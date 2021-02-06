import{View,Text,TextInput, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import React from 'react';
import { useState } from 'react';
import database from '@react-native-firebase/database';
const LoginPhon=(porps)=>{
    const [num, setNum] = useState('');
    const [msg, setMsg] = useState('');
    console.log(num)
    const numberValue=()=>{
        if(num.length == ''){
            setMsg('This filed cant be empty');
            return false
        }
        if(isNaN(num)){
            setMsg('Only Numaric value allowed');
            
        }
        if(num > 11){
            setMsg('Only 11 digits allowed');
            
        }
        
        if(num <= 11){
            setMsg('Only 11 digits allowed')
            
        }
        
        
        if(num.charAt(0)!=0 && num.length < 11){
            setMsg('Invalid Entery')
        }   
        else{
            porps.navigation.navigate('User type',{userNum: num})
            
        }
    
    }
    
    
    return(
        <View>
            <View style={styles.phoneView}>
            <Text style={styles.textContinue}>Enter Your Phone Number To Continue</Text>
        </View>
        
<View style={styles.flagView}>
        <Image style={styles.flag} resizeMode='contain' style={{width: 100, height: 100}} source={require('../../Assets/flag.jpg')}/>
        </View>
        <View style={styles.inputVlue}>
        <Input style={styles.userValue} onChangeText={(e)=>setNum(e)} keyboardType="phone-pad" style={styles.userValue} placeholder="0300 111 1111"/>
        </View>
        
        
        
        <View style={styles.errorText}><Text style={styles.textError}>{msg}</Text></View>
        <View style={styles.btnView}>
            <TouchableOpacity onPress={numberValue} style={styles.continueBtn}>
                <Text style={styles.continueText}>Continue</Text>
            </TouchableOpacity>
        </View>
        </View>
        
    );
   
}
const styles = StyleSheet.create({
    phoneView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: 100
        
        
    } ,
    textContinue:{
        fontSize: 18,
        fontWeight: 'bold',
    },
    inputVlue:{
        justifyContent: 'center',
        position: 'relative',
        top: 140,
        alignItems: 'center',
        fontSize: 30,
        alignContent: 'center',
        textAlign: 'center',
        

    },
    userValue:{
        fontSize: 30,
        textAlign: 'center',
        
    },
    flagView:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: 120,
    },
    countryCode:{
        display: 'flex',
        fontSize: 25,
        position: 'relative',
        left: 70,
        top: 98
    },
    flag:{
        position: 'relative',
        bottom: 20
    },
    btnView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        bottom: 30
    },
    continueBtn:{
        borderTopEndRadius: 5,
        borderTopLeftRadius: 5,
        borderBottomEndRadius: 5,
        borderBottomLeftRadius: 5,
        backgroundColor: '#0A60FF',
        height: 50,
        width: 300,
        position: 'relative',
        top: 190,
        justifyContent: 'center',
        alignItems: 'center'

    },
    span:{
        width: 100,
        height: 2,
    },
    continueText:{
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'uppercase',   
    },
    errorText:{
        color: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: 120
    },
    textError:{
        color:  'red'
    }
    
    
    


})
export default LoginPhon