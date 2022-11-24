import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-picker/picker'

const Select_Status = ({label, value, onSelectChange}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <Picker
            selectedValue={value}
            onValueChange={(itemValue) =>
                onSelectChange(itemValue)
            }
            >
            <Picker.Item label="Baik" value="Baik" />
            <Picker.Item label="Rusak" value="Rusak" />
        </Picker>
      </View>
    </View>
  )
}

export default Select_Status

const styles = StyleSheet.create({
    label:{fontSize:16, fontFamily: 'Poppins-Reguler', color:'#404040', paddingBottom:8},
  input:{borderWidth:1, borderColor:'#404040', borderRadius:8, paddingHorizontal:2, paddingVertical:0}
})