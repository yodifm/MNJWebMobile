


import { Text, StyleSheet, View, TouchableOpacity, Image, SafeAreaView, BackHandler, Alert, ActivityIndicator } from 'react-native'
import React, {useState,useEffect, useCallback} from 'react'
import { Button, Gap, Header, TextInput } from '../../components'
import { Login } from '../../assets'
import { useForm } from '../../utils'
import Axios from 'axios'
import { ScrollView } from 'react-native-gesture-handler'
import { useSelector, useDispatch } from 'react-redux'

const SignIn = ({navigation}) => {

const dispatch = useDispatch();

  
const [form, setForm] = useForm({
    username: '',
    password: ''  
   });

    const onSubmit = () => {
     console.log('form', form);
     dispatch({
      type: 'SET_LOGIN', value: form
     });
     Axios.post('https://marganusantarajaya.com/api_stock_opname/login.php', form)
     .then(res => {
       console.log('success', res);
     })
     .catch(err => {
       console.log('error', err);
     })
     navigation.navigate('StartStock')
};

  return (
    <ScrollView contentContainerStyle={{flexGrow:1}}>

       <View style = {styles.page}>
           <Header title="Sign In" subTitle="Login to continue your journey"/>
           <View style={styles.container}>
               <Login/>   
               
               <TextInput label="username" placeholder="Enter Your username" value={form.username} onChangeText={(value) => setForm('username', value)}/>
               <Gap height={16}/>
               <TextInput label="password" placeholder="Enter Your password" value={form.password} onChangeText={(value) => setForm('password', value)} />
               <Gap height={24}/>
               <Button text="Login" onPress={onSubmit}/>
           </View>         
       </View>
      
     </ScrollView>
  )
}

export default SignIn

const styles = StyleSheet.create({
    page:{flex:1},
    container:{backgroundColor:'white', paddingHorizontal:24, paddingVertical:10, flex:1},
    // Login: {justifyContent:'center', alignItems:'center', flex:1},
  });





























