/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AppNavigation from './Src/Navigation/index';

const App = () => {
  return (
    
    <>
 
   <AppNavigation/>
   
    
    
      
    </>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
