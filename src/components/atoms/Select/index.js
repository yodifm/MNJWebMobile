import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-picker/picker'

const Select = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <Picker
            // selectedValue={selectedLanguage}
            // onValueChange={(itemValue, itemIndex) =>
            //     setSelectedLanguage(itemValue)
            // }
            >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    </View>
  )
}

export default Select

const styles = StyleSheet.create({
    label:{fontSize:16, fontFamily: 'Poppins-Reguler', color:'#404040', paddingBottom:8},
  input:{borderWidth:1, borderColor:'#404040', borderRadius:8, paddingHorizontal:2, paddingVertical:0}
})