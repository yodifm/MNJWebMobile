import React, {useEffect} from "react";
import {Text, View} from 'react-native'
import { Logo } from "../../assets";

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('SignIn');
        }, 2000)
    }, [])
    return(
    <View style={{alignItems:"center", justifyContent:"center", flex:1}}>
        <Logo/>
        {/* <Text style={{fontSize:32, color:'#000', fontFamily:'Poppins-Light'}}>Hello Yodi</Text> */}
    </View>
    );
};

export default SplashScreen;