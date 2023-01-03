import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'


const ProductHistory = ({label, quantity, total, key_user, key_date, key_time}) => {
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
        <Text style={styles.key_user}>{key_user}</Text>
        <View style={styles.info}>
                <Text style={styles.key_date}>{key_date}</Text> 
                <Text style={styles.key_time}>{key_time}</Text>
        </View>
    </TouchableOpacity> 
  )
}

export default ProductHistory

const styles = StyleSheet.create({   
    container:{backgroundColor:'white', borderRadius:12, paddingHorizontal:8, paddingVertical:8, flexDirection:'row', alignItems:'center'},
    nameProduct:{fontSize: 14, fontFamily:'Poppins-Medium', color:'#000'},
    quantity:{fontSize: 12, fontFamily:'Poppins-Light', color:'#C7C9D9'},
    total:{fontSize: 18, fontFamily:'Poppins-Medium', color:'#6E5DE7', fontWeight:'bold', marginLeft:50},
    move:{padding:8, marginRight:8, marginLeft:5}, 
    key_user:{fontSize: 11, fontFamily:'Poppins-light', color:'#C7C9D9', marginLeft:20},
    info:{flexDirection:'row'},
    key_date:{fontSize: 10, fontFamily:'Poppins-light', color:'#C7C9D9', marginLeft:20},
    key_time:{fontSize: 10, fontFamily:'Poppins-light', color:'#C7C9D9', marginLeft:120},

})