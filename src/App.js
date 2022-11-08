import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StatusBar,StyleSheet,Text,useColorScheme} from 'react-native'; 

import {Colors} from 'react-native/Libraries/NewAppScreen';
import { SplashScreen, SignIn } from './pages';
import Router from './router';


const App = () => {
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  );
};


export default App;
