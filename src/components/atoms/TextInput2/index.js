import { StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native'
import React, {useState} from 'react'

const TextInput2 = ({label, placeholder}) => {
  const [number, setNumber] = useState('111')
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInputRN style={styles.input} placeholder={placeholder} keyboardType='number-pad'/>
    </View>
  )
}

export default TextInput2

const styles = StyleSheet.create({
  container:{backgroundColor:'white', borderRadius:12, paddingHorizontal:8, paddingVertical:8, flexDirection:'row', alignItems:'center'},
  label:{fontSize:16, fontFamily: 'Poppins-Reguler', color:'#C7C9D9', paddingBottom:8},
  input:{borderWidth:1, borderColor:'#C7C9D9', borderRadius:8, padding:10, width:83}
});