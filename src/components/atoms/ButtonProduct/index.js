import { StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Button = ({text , label, quantityK, quantityB, quantityU, quantityTotal, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
       <View style={styles.container}>
            <View style={styles.move}>
                <Text style={styles.nameProduct}>{label}</Text>
                <Text style={styles.quantity}>{quantityK}</Text>
                <Text style={styles.quantity}>{quantityB}</Text>
                <Text style={styles.quantity}>{quantityU}</Text>
            </View>
            <View>
                <Text style={styles.total}>{quantityTotal}</Text>
            </View>
        </View>
    </TouchableOpacity>
  );
};

export default Button

const styles = StyleSheet.create({
  container:{backgroundColor:'white', borderRadius:12, paddingHorizontal:8, paddingVertical:12, flexDirection:'row', alignItems:'center'},
  nameProduct:{fontSize: 14, fontFamily:'Poppins-Medium', color:'#000'},
  quantity:{fontSize: 12, fontFamily:'Poppins-Light', color:'#C7C9D9'},
  total:{fontSize: 18, fontFamily:'Poppins-Medium', color:'#6E5DE7', fontWeight:'bold', marginLeft:30},
  move:{padding:8, marginRight:8, marginLeft:5}
});