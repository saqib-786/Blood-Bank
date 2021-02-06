import React, { Component, } from 'react';
import { Container, Header, Content, Footer, FooterTab, Text,View, ScrollableTab} from 'native-base';
import {StyleSheet, }from 'react-native';
import database from '@react-native-firebase/database';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { ListView } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
// import {connect} from 'react-redux';

 class Donors extends Component {
  constructor(){
    super()
    this.state={
      firebaseData: [{}],
      nameArry: ['Ali', 'Abbas', 'Anwar','Asad']
    }
  }
  componentDidMount(){
    database().ref('/').child('Users').on('child_added',data=>{
      this.setState({
        firebaseData:data.val()
      })
    })
  }
  
  

  render() {
  let newUser = [{
    name: this.state.firebaseData.userName,
    num: this.state.firebaseData.userNum,
    group: this.state.firebaseData.bloodGroup,
    address: this.state.firebaseData.userAddress,
    userType: this.state.firebaseData.usertype,
    gender: this.state.firebaseData.userGender,
  }]  
  
  
  
    
    return (
    
     
      // <Container>
      //   <Header />
      //   <View>
      //     {userList.map((item,idex)=>{
      //       <Text>{item.userNum}</Text>
      //     })}
      //   </View>
          
        <>
        <ScrollView>
        <View style={{backgroundColor:'blue',height: 150}}>
          {newUser.map((item,index)=>{
            return(
              <View style={style.detailsView}  key={index}>
                <Text style={{color:'white',fontSize: 15}}>Name:{item.name}</Text>
                <Text style={{color:'white',fontSize: 15}}>Name:{item.gender}</Text>
                <Text style={{color:'white',fontSize: 15}}>Blood Group:{item.group}</Text>
                <Text style={{color:'white',fontSize: 15}}>Address:{item.address}</Text>
                <Text style={{color:'white',fontSize: 15}}>Mobile:{item.num}</Text>
                <Text style={{color:'white',fontSize: 15}}>User Type:{item.userType}</Text>
                

               </View>
            )
          })}
        </View>
        </ScrollView>
        </>
        
        
      //   <Content />
      //   <Footer>
      //     <FooterTab>
      //       <Button active>
      //         <Text>Donors</Text>
      //       </Button>
      //       <Button  onPress={()=>this.props.navigation.navigate('Recipient')}>
      //         <Text>Recipient</Text>
      //       </Button>
      //       <Button onPress={()=>this.props.navigation.navigate('My Team')}>
      //         <Text>My Team</Text>
      //       </Button>
      //       <Button onPress={()=>this.props.navigation.navigate('Profile')}>
      //         <Text>Profile</Text>
      //       </Button>
      //     </FooterTab>
      //   </Footer>
      // </Container>
    );
  }
}
const mapStateToProps=(state)=>{
  state
}
export default Donors
const style = StyleSheet.create({
  Container:{
    color: 'black'
  },
//   dataView:{
//     shadowColor: "#000",
// shadowOffset: {
// 	width: 0,
// 	height: 5,
// },
// shadowOpacity: 0.36,
// shadowRadius: 6.68,

// elevation: 11,
// justifyContent: 'center',
// alignContent: 'center',
// flex: 1
//   },
  detailsView:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20
  }
  
})