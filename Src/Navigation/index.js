import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import LoginScreen from '../Screens/LogingScreen';
import NameScreen from '../Screens/Name';
import AddressScreen from '../Screens/Adress';
import BloodGroupScreen from '../Screens/BloodGroup';
import UserType from '../Screens/UserType';
import DonorScreen from '../Screens/DonorScreen';
import AboutMe from '../Screens/AboutMe';
import TeamScreen from '../Screens/TeamScreen';
import RecipientScreen from '../Screens/RecpientScreen';


const Stack = createStackNavigator();

function AppNavigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen  name="SIGN UP"  component={HomeScreen} />
        <Stack.Screen name="Donors" component={DonorScreen} />
          <Stack.Screen name="Sign Up With Mobile No" component={LoginScreen} />
          <Stack.Screen name="User Name" component={NameScreen} />
          <Stack.Screen name="User Address" component={AddressScreen} />
          <Stack.Screen name="Profile" component={AboutMe} />
          <Stack.Screen name="My Team" component={TeamScreen} />
          <Stack.Screen name="Recipient" component={RecipientScreen} />
        <Stack.Screen name="Blood Group" component={BloodGroupScreen} />
        <Stack.Screen name="User type" component={UserType} />



       





          

          
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default AppNavigation;