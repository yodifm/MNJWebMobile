import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  BackHandler,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {Button, Gap, Header, TextInput} from '../../components';
import {Login} from '../../assets';
import {Logo1} from '../../assets';
import {useForm} from '../../utils';
import Axios from 'axios';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';

const SignIn = ({navigation}) => {
  const dispatch = useDispatch();

  const [form, setForm] = useForm({
    username: '',
    password: '',
  });

  const onSubmit = () => {
    console.log('form', form);

    //LOGIN API
    Axios.post(
      'https://marganusantarajaya.com/api_stock_opname/login.php',
      form,
    )
      .then(res => {
        console.log(res.data);
        var login_info = {
          username: form.username,
          password: form.password,
          jabatan: res.data[0].jabatan,
          kode_cbg: res.data[0].kode_cbg,
        };

        dispatch({
          type: 'SET_LOGIN',
          value: login_info,
        });

        console.log(res.data);
        if (res.data == 'GAGAL') {
          //function to make two option alert
          Alert.alert(
            //title
            'Login Failed',
            //body
            'Please Check ID and Password',
            [
              {
                text: 'OK',
                onPress: () => console.log('Yes Pressed'),
              },
              
            ],
            {cancelable: false},
            //clicking out side of alert will not cancel
          );
        }
        else{

  
          val = {branch_code: res.data[0].kode_cbg};
          Axios.post(
            'https://marganusantarajaya.com/api_stock_opname/display/list_number_stock.php',
            val,
          )
            .then(result => {
              console.log(result.data[0]);
             
          dispatch({
            type: 'SET_USER_DATA',
            value: result.data,
          });
             
                navigation.navigate('StartStock', {
                  user_data: res.data,
                  transaction_number: result.data,
                  branch_code: res.data[0].kode_cbg,
                });
              
            })
            .catch(err => {
            
                //function to make two option alert   
                Alert.alert(
                  //title
                  'Data does not exist',
                  //body
                  'Please Generate Data',
                  [
                    {
                      text: 'OK',
                      onPress: () => console.log('Yes Pressed'),
                    },
                  ],
                  {cancelable: false},
                  //clicking out side of alert will not cancel
                )
              console.log('error', err);
            });
        }

        // PRINCIPLE
        // val2 = {
        //   branch_code: res.data[0].kode_cbg,
        //   transaction_number: result.data[0].transaction_number,
        // };
        // Axios.post(
        //   'https://marganusantarajaya.com/api_stock_opname/display/list_principal.php',
        //   val2,
        // ).then(result2 => {
        //   console.log(result2.data[0]);

        //   });
        // });
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header title="Sign In" subTitle="Stock Opname Application" />
        <View style={styles.container}>
          <Logo1
            style={{marginTop: 60, marginBottom: 60, alignSelf: 'center'}}
          />

          <TextInput
            color="#000"
            label="username"
            placeholder="Enter Your username"
            value={form.username}
            onChangeText={value => setForm('username', value)}
          />
          <Gap height={16} />
          <TextInput
            color="#000"
            label="password"
            placeholder="Enter Your password"
            value={form.password}
            onChangeText={value => setForm('password', value)}
            secureTextEntry={true}
          />

          <Gap height={24} />
          <Button txt="Login" onPress={onSubmit} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 10,
    flex: 1,
  },

  // Login: {justifyContent:'center', alignItems:'center', flex:1},
});
