import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Select_Status = ({label, value, onSelectChange}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        
      </View>
    </View>
  )
}

export default Select_Status

const styles = StyleSheet.create({
    label:{fontSize:16, fontFamily: 'Poppins-Reguler', color:'#404040', paddingBottom:8},
  input:{borderWidth:1, borderColor:'#404040', borderRadius:8, paddingHorizontal:2, paddingVertical:0}
})