import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Product = ({label, quantity, total, selisih_num, input_num}) => {
  return (
    
    <TouchableOpacity activeOpacity={0.5} >
        
        <View style={styles.container}>
        {
            <View style={styles.move}>
                <Text style={styles.nameProduct}>{label}</Text>
                <Text style={styles.quantity}>{quantity}</Text>
            </View>
            
        }
            <View>
                <Text style={styles.total}>{total}</Text>
            </View>
        </View>
        <View style={styles.info}>
                <Text style={styles.selisih_num}>{selisih_num}</Text> 
                <Text style={styles.input_num}>{input_num}</Text>
        </View>
    </TouchableOpacity> 
  )
}

export default Product  

const styles = StyleSheet.create({   
    container:{backgroundColor:'white', borderRadius:12, paddingHorizontal:8, paddingVertical:8, flexDirection:'row', alignItems:'center'},
    nameProduct:{fontSize: 14, fontFamily:'Poppins-Medium', color:'#000'},
    quantity:{fontSize: 12, fontFamily:'Poppins-Light', color:'#C7C9D9'},
    total:{fontSize: 18, fontFamily:'Poppins-Medium', color:'#6E5DE7', fontWeight:'bold', marginLeft:50},
    move:{padding:8, marginRight:8, marginLeft:5}, 
    info:{flexDirection:'row'},
    selisih_num:{fontSize: 10, fontFamily:'Poppins-light', color:'#C7C9D9', marginLeft:20},
    input_num:{fontSize: 10, fontFamily:'Poppins-light', color:'#C7C9D9', marginLeft:140},

})