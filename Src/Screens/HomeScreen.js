import {View,Text, StyleSheet,Image, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import { LoginManager } from "react-native-fbsdk";
import React from 'react';



function HomeScreen(porps) {
  const  facebookLogin= async()=>{
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  // Once signed in, get the users AccesToken
  const data = await AccessToken.getCurrentAccessToken();

  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(facebookCredential);
    
  }
    return(
        <View>
            <View style={styles.vew}>
          <Image style={{width: 200, height:200, position: 'relative', top: 100}} source={require('../../Assets/Mobile.png')} />

        </View>
      <View style={styles.viewBtn}>
        <TouchableOpacity onPress={()=>porps.navigation.navigate('Sign Up With Mobile No')} style={styles.Button}>
          <Text style={styles.ButtonText}>Continue With Phone Number</Text>
        </TouchableOpacity>
        <View style={styles.facebookView}>
        <TouchableOpacity onPress={facebookLogin} style={styles.facebookButton}>
          <Text style={styles.facebookText}>Continue with facebook</Text>
        </TouchableOpacity>
      </View>
      </View>
      <View style={styles.trems}>
        <Text style={styles.tremsText}> We don't share your data with any third party by signing in </Text>
        <Text style={styles.tremsText2}>  you are agree with our Trems of Services & Privacy Policy</Text>
      </View>
      </View>
    )
}
const styles = StyleSheet.create({
    vew:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      viewBtn:{
        flex: 1
      },
      Button:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#0A60FF',
        height: 50,
        width: 300,
        position: 'relative',
        top: 250,
        left: 30,
        color: '#fff',
        borderTopEndRadius: 5,
        borderTopLeftRadius: 5,
        borderBottomEndRadius: 5,
        borderBottomLeftRadius: 5
      },
      ButtonText:{
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'uppercase',
      },
      facebookView:{
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
       }, 
      facebookButton:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 300,
        position: 'relative',
        borderTopWidth: 1,
        borderTopColor: '#0A60FF',
        borderStartWidth: 1,
        borderStartColor: '#0A60FF',
        borderEndWidth:  1,
        borderEndColor: '#0A60FF',
        borderBottomWidth: 1,
        borderBottomColor: '#0A60FF',
        borderTopEndRadius: 5,
        borderTopLeftRadius: 5,
        borderBottomEndRadius: 5,
        borderBottomLeftRadius: 5,
        position: 'relative',
        top: 300
      },
      facebookText:{
       fontSize: 15,
       fontWeight: 'bold',
       textTransform: 'uppercase',
       color: '#0A60FF',
       borderStartColor: 'gray',
       borderEndColor: 'gray',
       borderTopColor: 'gray',
       borderBottomColor: 'gray',
      },
      trems:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: 450
      },
      tremsText:{

        color: 'gray',
        fontSize: 13,
        justifyContent: 'center',
        alignItems: 'center',
      },
      tremsText2:{
        color: 'gray',
        fontSize: 13,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        textAlign: 'center'
      }

})
export default HomeScreen