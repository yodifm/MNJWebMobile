import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header, TextInput, Gap, Button, Product, Search, TextInput2 } from '../../components'
import { ScrollView } from 'react-native-gesture-handler'



const Dashboard = ({navigation}) => {
  
  return (
    <View style={styles.page}>
      <Header title="Search The Product" subTitle="Make sure it's valid"/>
      <Search/>
      <View style={styles.container}>
            <Gap height={24}/>
            <ScrollView>
            
              <Text style={styles.text}>List Product</Text>
              <Gap height={16}/>
              <Button onPress={() => navigation.navigate('InputStock')}>
              <Product label="OBH Anak - A3019" quantity="7C - 2B - 3C" total="3000 Units"/>
              </Button>
              <Gap height={16}/>
              <Product label="OBH Anak - A3019" quantity="7C - 2B - 3C" total="3000 Units"/>
              <Gap height={16}/>
              <Product label="OBH Anak - A3019" quantity="7C - 2B - 3C" total="3000 Units"/>
              <Gap height={16}/>
              <Product label="OBH Anak - A3019" quantity="7C - 2B - 3C" total="3000 Units"/>
              <Gap height={16}/>
              <Product label="OBH Anak - A3019" quantity="7C - 2B - 3C" total="3000 Units"/>
            </ScrollView>
            
            <Gap height={30}/>
            <Button text="Finish Stock Opname" onPress={() => navigation.navigate('FinishStock')}/> 
           
        </View>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
    page:{flex:1},
    container:{backgroundColor:'#F5F3F3', paddingHorizontal:24, paddingVertical:10, flex:1},
    text:{fontSize:18, fontFamily:'Poppins-Medium', color:'black', fontWeight:'bold'}
})