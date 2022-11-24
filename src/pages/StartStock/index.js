import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header, TextInput, Gap, Button, Select, Select_Status } from '../../components'
import { useForm } from '../../utils'
import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'


const StartStock = ({navigation}) => {
  const [form, setForm] = useForm({
    number:'',
    principle:'Konimex',
    status: 'Baik',
    warehouse_code:'',
  });

  const dispatch = useDispatch()
  const loginReducer = useSelector(state => state.loginReducer)
  
  const onSubmit = () =>{
    console.log('form: ', form);
    const data ={
      ...form,
      ...loginReducer
    }
    // dispatch({type: 'SET_STARTSTOCK', value: form});
    console.log('data ', data )

    // navigation.replace('Dashboard')
  }
  return (
    <ScrollView contentContainerStyle={{flexGrow:1}}>
    <View style={styles.page}>
      <Header title="Stock Opname" subTitle="Click start after you filled" onBack={() => {}}/>
      <View style={styles.container}>
            <Gap height={24}/>
            <TextInput label= "Number" placeholder = "input number" value={form.number} onChangeText={(value) => setForm('number', value)} ></TextInput>
            <Gap height={16}/>
            <Select label="Principle" value={form.principle} onSelectChange={(value) => setForm('principle', value)}/>
            <Gap height={16}/>
            <Select_Status label="Status" value={form.status} onSelectChange={(value) => setForm('status', value)}/>
            <Gap height={16}/>
            <Select label="Warehouse Code" value={form.warehouse_code} onSelectChange={(value) => setForm('warehouse_code', value)}/>
            <Gap height={16}/>
            <Gap height={30}/>
            <Button text="Start Stock Opname" onPress={onSubmit}/> 
        </View>
    </View>
    </ScrollView>
  )
}

export default StartStock

const styles = StyleSheet.create({
  page:{flex:1},
  container:{backgroundColor:'#F5F3F3', paddingHorizontal:24, paddingVertical:10, flex:1},
});