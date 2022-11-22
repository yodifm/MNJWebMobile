import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StatusBar,StyleSheet,Text,useColorScheme} from 'react-native'; 

import {Colors} from 'react-native/Libraries/NewAppScreen';
import { SplashScreen, SignIn } from './pages';
import Router from './router';
import { Provider } from 'react-redux';
import store from './redux/store';



const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Router/>
      </Provider>
    </NavigationContainer>
  );
};


export default App;
