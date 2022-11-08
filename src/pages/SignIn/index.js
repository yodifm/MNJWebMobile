import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap, Header, TextInput } from '../../components'
import { Login } from '../../assets'
import StartStock from '../StartStock'

const SignIn = ({navigation}) => {
  return (
    <View style = {styles.page}>
        <Header title="Sign In" subTitle="Login to continue your journey"/>
        <View style={styles.container}>
            <Login/>   
            <TextInput label="Email" placeholder="Enter Your Email"/>
            <Gap height={16}/>
            <TextInput label="Password" placeholder="Enter Your Password"/>
            <Gap height={24}/>
            <Button text="Login" onPress={() => navigation.navigate('StartStock')}/>
        </View>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  page:{flex:1},
  container:{backgroundColor:'white', paddingHorizontal:24, paddingVertical:10, flex:1},
  // Login: {justifyContent:'center', alignItems:'center', flex:1},
});