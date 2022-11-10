import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header, Product, TextInput2, Gap, Button } from '../../components'

const InputStock = () => {
  return (
    <View style={styles.page}>
        <Header title="Input Stock Opname" subTitle="Click start after you filled" onBack={() => {}}/>
      <View style={styles.container}>
          <Product label="OBH Anak - A3019" quantity="7C - 2B - 3C" total="3000 Units"/>
          <Gap height={14}/>
            <Text style={styles.label}>Input Stock</Text>
            <Gap height={14}/>
          <View style={styles.text}>
            <TextInput2 placeholder="Carton"/>
            <Gap width={16}/>
            <TextInput2 placeholder="Box"/>
            <Gap width={16}/>
            <TextInput2 placeholder="Unit"/>
          </View>
          <Gap height={24}/>
          <Button style={styles.button} text="Save Data" color="#2442AF" textColor="#fff"/>
          <Gap height={20}/>
            <Text style={styles.label}>Latest Historical </Text>
            <Gap height={20}/>
            <Product label="OBH Anak - A3019" quantity="7C - 2B - 3C" total="3000 Units"/>
            <Gap height={16}/>
            <Product label="OBH Anak - A3019" quantity="7C - 2B - 3C" total="3000 Units"/>
        </View>
      </View>
  )
}

export default InputStock

const styles = StyleSheet.create({
  page:{flex:1},
  container:{backgroundColor:'#fff', paddingVertical:10, paddingHorizontal:20, flex:1},
  text:{flexDirection:'row', paddingHorizontal:15, alignSelf:'center'},
  label:{fontSize:18, fontFamily:'Poppins-ligth', color:'black', fontWeight:'200', paddingLeft:8 },
  button:{width:315, paddingHorizontal:30}
})