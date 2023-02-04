import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Logout } from '../../../assets'
import { TouchableOpacity } from 'react-native-gesture-handler'




const HeaderLogout = ({title, subTitle, onBack, moveBack}) => {
  
  return (
    <View style={styles.container}>
      {
        onBack && (
        <TouchableOpacity activeOpacity={0.5} onPress={moveBack}>
          <View style={styles.back}>
            <Logout/>
          </View>
        </TouchableOpacity>
        )
      }
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.SubTitle}>{subTitle}</Text>
      </View>
    </View>   
  )
}

export default HeaderLogout

const styles = StyleSheet.create({
    container:{backgroundColor:'white', paddingHorizontal:24, paddingTop:26, paddingBottom:24, flexDirection:'row', alignItems:'center'},
    title:{fontSize: 22, fontFamily:'Poppins-Medium', color:'#000'},
    SubTitle:{fontSize: 14, fontFamily:'Poppins-Light', color:'#C7C9D9'},
    back:{padding:16, marginRight:16, marginLeft:-10}
});