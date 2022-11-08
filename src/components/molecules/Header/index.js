import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({title, subTitle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.SubTitle}>{subTitle}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{backgroundColor:'white', paddingHorizontal:24, paddingTop:26, paddingBottom:24},
    title:{fontSize: 22, fontFamily:'Poppins-Medium', color:'#000'},
    SubTitle:{fontSize: 14, fontFamily:'Poppins-Light', color:'#C7C9D9'},

});