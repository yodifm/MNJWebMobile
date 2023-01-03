import { StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Button = ({txt , color ='#2442AF', textColor='#fff', onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View style={styles.container(color)}>
        <Text style={styles.text(textColor)}>{txt}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button

const styles = StyleSheet.create({
  container: (color) => ({
    borderRadius:8,
    backgroundColor:color,
    padding:12,
    
  }),
  text: (color) => ({
    fontSize:16, fontFamily:'Poppins-Medium', 
    color: color, 
    textAlign:'center'
  }),
});