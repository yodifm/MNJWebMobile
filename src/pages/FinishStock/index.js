import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header, TextInput, Gap, Button } from '../../components'
import { Success } from '../../assets'

const FinishStock = ({navigation}) => {
  return (
    <View style = {styles.page}>
        <View style={styles.container}>
            <Success />   
            <Text style={styles.text}>Stock Opname Success</Text>
            <Gap height={37}/>
            <Button text="Back to Home" color='white' textColor='#6E5DE7'  onPress={() => navigation.navigate('StartStock')}/>
        </View> 
    </View>
  )
}

export default FinishStock

const styles = StyleSheet.create({
    page:{flex:1},
    container:{backgroundColor:'#6E5DE7', paddingHorizontal:24, paddingVertical:10, flex:1, paddingTop:170},
    text:{fontSize:24, fontFamily:'Poppins-light', textAlign:'center', color:'white'}
})