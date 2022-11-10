import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header, TextInput, Gap, Button, Select } from '../../components'

const StartStock = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Stock Opname" subTitle="Click start after you filled" onBack={() => {}}/>
      <View style={styles.container}>
            <Gap height={24}/>
            <Select label="Number"/>
            <Gap height={16}/>
            <Select label="Principle"/>
            <Gap height={16}/>
            <Select label="Status"/>
            <Gap height={16}/>
            <Select label="Warehouse Code"/>
            <Gap height={16}/>
            <Gap height={30}/>
            <Button text="Start Stock Opname" onPress={() => navigation.navigate('Dashboard')}/> 
        </View>
    </View>
  )
}

export default StartStock

const styles = StyleSheet.create({
  page:{flex:1},
  container:{backgroundColor:'#F5F3F3', paddingHorizontal:24, paddingVertical:10, flex:1},
});