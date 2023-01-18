import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { loginReducer } from '../../../redux/reducer/auth'

const Product = ({label, quantity, total, selisih, jabatan}) => {

  return (
    
    <TouchableOpacity activeOpacity={0.5} >
        
        <View style={styles.container}>
        {
            <View style={styles.move}>
                <Text style={styles.nameProduct}>{label}</Text>
                <Text style={styles.quantity}>{quantity}</Text>
                <Text style={styles.total}>{total}</Text>
            </View>
            
        }
            <View>
            </View>
        </View>
        <View style={styles.info}>
            {console.log(jabatan)}
                {jabatan === 'BM' || jabatan === 'BAO' ? (<Text style={styles.selisih_num}>{selisih.selisih != undefined ? `Selisih: ${selisih.selisih} Unit`: "Selisih : 0 Unit"}</Text>) : null}
                <Text style={styles.input_num}>{selisih.input != undefined ? `Input: ${selisih.input} Unit`: "Input: 0 Unit"}</Text>
        </View>
    </TouchableOpacity> 
  )
}

export default Product  

const styles = StyleSheet.create({   
    container:{backgroundColor:'white', borderRadius:12, paddingHorizontal:8, paddingVertical:8, flexDirection:'row', alignItems:'center'},
    nameProduct:{fontSize: 14, fontFamily:'Poppins-Medium', color:'#000'},
    quantity:{fontSize: 12, fontFamily:'Poppins-Light', color:'#C7C9D9'},
    total:{fontSize: 18, fontFamily:'Poppins-Medium', color:'#6E5DE7', fontWeight:'bold'},
    move:{padding:8, marginRight:8, marginLeft:5}, 
    info:{flexDirection:'row'},
    selisih_num:{fontSize: 10, fontFamily:'Poppins-light', color:'#FF0000', marginLeft:20},
    input_num:{fontSize: 10, fontFamily:'Poppins-light', color:'#000', marginLeft:140},

})