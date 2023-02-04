import {StyleSheet, Text, View, Alert, RefreshControl, BackHandler} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {
  Header,
  HeaderLogout,
  TextInput,
  Gap,
  Button,
  Select_Status,
  Select,
} from '../../components';
import {useForm} from '../../utils';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import Axios from 'axios';
import {Logo1, CheckBox, Box, Check} from '../../assets';

const initState = {
  branch: '',
  number: '',
  code: '',
  warehouse_code: '',
  status: '',
};

const FirstPage = ({navigation, route}) => {
  const [form, setForm] = useForm({
    number: '',
    code: '',
    status: '',
    warehouse_code: '',
  });

  var val3, val4, val5;
  const [chosen, setChosen] = useState(initState);
  const [codeData, setCodeData] = useState([]);
  const [warehouseData, setWarehouseData] = useState([]);
  const [statusData, setStatusData] = useState([]);
  const [listClosing, setListClosing] = useState([]);
  const [ResetData, setResetData] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const [isFocus, setIsFocus] = useState(false);
  var princ_code;
  const dispatch = useDispatch();
  const loginReducer = useSelector(state => state.loginReducer);
  const dataReducer = useSelector(state => state.UserDataReducer);

  const {user_data, transaction_number, branch_code} = route.params;

  console.log(user_data);
  console.log(transaction_number);
  console.log(branch_code);

  const backAction = () => { 
         
    if (navigation.isFocused()) { 
        Alert.alert( 
            "Exit App", 
            "Do you want to logout?", 
            [ 
              { 
                text: "No", 
                onPress: () => console.log("Cancel Pressed"), 
                style: "cancel" 
              }, 
              { text: "Yes", onPress: () =>  
              navigation.push('SignIn') } 
            ], 
            { cancelable: false } 
            ); 
            return true; 
    } 
    else { 
        return false 
    } 
  }; 

  useEffect(() => { 
    BackHandler.addEventListener("hardwareBackPress", backAction); 
 
    return () => 
      BackHandler.removeEventListener("hardwareBackPress", backAction); 
  }, []);
 
 

  var valStartMove;
  const StartMove = () => {
    valStartMove = {
      branch_code: loginReducer.kode_cbg,
    };
    Axios.post(
      'https://marganusantarajaya.com/api_stock_opname/display/list_number_stock.php',
      val,
    )
      .then(result => {
        dispatch({
          type: 'SET_USER_DATA',
          value: result.data,
        });

        navigation.navigate('StartStock', {
          user_data: user_data,
          transaction_number: transaction_number,
          branch_code: branch_code,
        });
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  // val = {branch_code: res.data[0].kode_cbg};
  // Axios.post(
  //   'https://marganusantarajaya.com/api_stock_opname/display/list_number_stock.php',
  //   val,
  // )
  //   .then(result => {
  //     console.log(result.data[0]);

  //     dispatch({
  //       type: 'SET_USER_DATA',
  //       value: result.data,
  //     });

  //     navigation.navigate('FirstPage', {
  //       user_data: user_data
  //       transaction_number: result.data,
  //       branch_code: res.data[0].kode_cbg,
  //     });
  //   })
  //   .catch(err => {
  //     console.log('error', err);
  //   });

  var valListClosing;
  const SearchClosing = () => {
    // console.log(inputSearch);
    console.log(loginReducer.kode_cbg);

    valListClosing = {
      branch_code: loginReducer.kode_cbg,
    };

    // console.log(val3)
    Axios.post(
      'https://marganusantarajaya.com/api_stock_opname/display/list_transaction_closing.php',
      valListClosing,
    )
      .then(function (response) {
        console.log(response.data);
        if (response.data == null) {
          //function to make two option alert
          Alert.alert(
            //title
            'Alert',
            //body
            'List Closing Product is Empty',
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

        // console.log(response.data.length)
        var count = Object.keys(response.data).length;
        let stateArray = [];
        for (var i = 0; i < count; i++) {
          stateArray.push({
            value: response.data[i],
            // label: response.data[i],
          });
        }
        // console.log(stateArray);
        navigation.navigate('ListClosing', {
          data_closing: stateArray,
          branch_code: loginReducer.kode_cbg,
        });
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  return (
    <ScrollView>
      

        <HeaderLogout
          title="Stock Opname"
          subTitle="Please Choose the Activity"
          onBack={() => {}}
          moveBack={() => backAction()}
          
          />
        <View style={styles.container}>
          <Gap height={24} />
          {console.log(dataReducer)}

          <Gap height={20} />

          <View style={{alignItems: 'center'}}>
            <Box />
            <Button txt="Stock Opname" onPress={StartMove} />
          </View>

          <Gap height={30} />
          <View style={{alignItems: 'center', }}>
            <Check />
            <Button
              txt="List Closing Transaction"
              color="red"
              onPress={SearchClosing}
            />
         
          </View>
        </View>
        
   
          
    </ScrollView>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor:'#fff'},
  container: {backgroundColor:'#F2F2F2',
  paddingHorizontal: 24,
  paddingVertical: 10,
  flex: 1,},

  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Reguler',
    color: '#000',
    paddingBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#404040',
    borderRadius: 8,
    paddingHorizontal: 2,
    paddingVertical: 0,
  },
  selectedTextStyle: {
    color: '#000',
  },
  placeholderStyle: {
    color: '#000',
  },
  inputSearchStyle: {
    color: '#000',
  },
  itemTextStyle: {
    color: '#000',
  },
});
