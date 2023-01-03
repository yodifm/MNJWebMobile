import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import {
  Header,
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
import {Picker} from '@react-native-picker/picker';   

const initState = {
  branch:'',
  number: '',
  code: '',
  warehouse_code: '',
  status: '',
};

const StartStock = ({navigation, route}) => {
  
  const [form, setForm] = useForm({
    number: '',
    code: '',
    status: '',
    warehouse_code: '',
  });
  
  var val3, val4, val5
  const [chosen, setChosen] = useState(initState);
  const [codeData, setCodeData] = useState([]);
  const [warehouseData, setWarehouseData] = useState([]);
  const [statusData, setStatusData] = useState([]);
  const[isFocus, setIsFocus] = useState(false)
  var princ_code;
  const dispatch = useDispatch();
  const loginReducer = useSelector(state => state.loginReducer);
  const dataReducer = useSelector(state => state.UserDataReducer);

  const {user_data, transaction_number, branch_code} = route.params;

  // useEffect(() => {
  //   val3 = {
      
  //     branch_code : data.branch,
  //     transaction_number : data.number,
  //     principal_code : data.code,
  //     warehouse_code : data.warehouse,
  //     status : data.status,
  //   }
    
  //   console.log(val3)
  //   Axios.post(
  //     'https://marganusantarajaya.com/api_stock_opname/display/list_product.php',
  //     val3,
  //   )
  //     .then(function (response) {
  //       console.log(response.data.length)
  //       var count = Object.keys(response.data).length;
  //       let stateArray = [];
  //       for (var i = 0; i < count; i++) {
  //         stateArray.push({
  //           value: response.data[i],
  //           // label: response.data[i],
  //         });
  //       }
  //       console.log(stateArray);
  //       setProductData(stateArray);
  //     })
  //     .catch(err => {
  //       console.log('error', err);
  //     });
  // });

  const onSubmit = () => {
    dispatch({
      type: 'SET_STOCK_DATA',
      value: chosen,
    });

    navigation.navigate('Dashboard', {
      data: chosen,
    });
    
   };


  const handleCode = value => {
    console.log(chosen.number);
    console.log(value.transaction_number)
   val3 = {
      branch_code: branch_code,
      transaction_number: value.transaction_number,
    };
    Axios.post(
      'https://marganusantarajaya.com/api_stock_opname/display/list_principal.php',
      val3,
    )
      .then(function (response) {
        var count = Object.keys(response.data).length;
        let stateArray = [];
        for (var i = 0; i < count; i++) {
          stateArray.push({
            value: response.data[i].principal_code,
            label: response.data[i].principal_code,
          });
        }
        console.log(stateArray);
        setCodeData(stateArray);
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  const handleWarehouse = value => {
    console.log(chosen.number)
   val4 = {
      branch_code: branch_code,
      transaction_number: chosen.number.transaction_number,
      principal_code: value.value,
    };
    console.log(val4)
    Axios.post(
      'https://marganusantarajaya.com/api_stock_opname/display/list_warehouse.php',
      val4,
    )
      .then(function (response) {
        console.log(response.data)
        var count = Object.keys(response.data).length;
        let stateArray = [];
        for (var i = 0; i < count; i++) {
          stateArray.push({
            value: response.data[i].warehouse_code, //postman value
            label: response.data[i].warehouse_code,
          });
        }
        console.log(stateArray);
        setWarehouseData(stateArray);
      })
      .catch(err => {
        console.log('error', err);
      });
  };


  const handlestatus = value => {
    console.log(chosen.number)
    console.log(chosen.warehouse)
    val5 = {
       branch_code: branch_code,
       transaction_number: chosen.number.transaction_number,
       principal_code: chosen.code,
       warehouse_code: value.value,
     };
     console.log(val5)

     Axios.post(
       'https://marganusantarajaya.com/api_stock_opname/display/list_status.php',
       val5,
     )
       .then(function (response) {
         console.log(response.data)
         var count = Object.keys(response.data).length;
         let stateArray = [];
         for (var i = 0; i < count; i++) {
           stateArray.push({
             value: response.data[i].status, //postman value
             label: response.data[i].status,
           });
         }
         console.log(stateArray);
         setStatusData(stateArray);
       })
       .catch(err => {
         console.log('error', err);
       });
   };
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={{}}>
        <Header
          title="Stock Opname"
          subTitle="Click start after you filled"
          onBack={() => {}}
        />
        <View style={styles.container}>
          <Gap height={24} />
          
          {/* <Picker
            style={{width: '100%'}}
            mode="dropdown"
            selectedValue={chosen.number}
            // defaultValue={chosen.number == '' ? null : chosen.number}
            onValueChange={val => {
              setChosen({...chosen , number : val});
              handleCode(val);
            }}>
            {transaction_number != [] ? (
              transaction_number.map(item => {
                return (
                  <Picker.Item
                    label={item.transaction_number}
                    value={item.transaction_number}
                    key={item.transaction_number + '0'}
                  />
                );
              })
            ) : (
              <Picker.Item label="Loading..." value="0" key="qweqeqeq" />
            )}
          </Picker> */}
          <Dropdown
            style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={transaction_number}
            search
            maxHeight={300}
            labelField="transaction_number"
            valueField="transaction_number"
            placeholder={'Select Number' }
            searchPlaceholder="Search..."
            value={chosen.number}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setChosen({...chosen, number: item});
              handleCode(item)
              setIsFocus(false);
            }}
          />
          <Gap height={16} />
         
          <Dropdown
            style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={codeData}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={'Select Principle' }
            searchPlaceholder="Search..."
            value={chosen.code}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setChosen({...chosen, code: item.value});
              handleWarehouse(item)
              setIsFocus(false);
            }}
          />
          
          <Gap height={16} />
          <Dropdown
            style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={warehouseData}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={'Select Warehouse Code'}
            searchPlaceholder="Search..."
            value={chosen.warehouse_code}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setChosen({...chosen, warehouse_code: item.value});
              handlestatus(item)
              setIsFocus(false);
            }}
          />
          


          <Gap height={16} />
          <Dropdown
            style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={statusData}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={'Select Status'}
            searchPlaceholder="Search..."
            value={chosen.status}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setChosen({...chosen, status: item.value, branch:branch_code});
              setIsFocus(false);
            }}
          />
          
         
          <Gap height={30} />
          <Button txt="Start Stock Opname" onPress={onSubmit} />
        </View>
      </View>
    </ScrollView>
  );
};

export default StartStock;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: '#F5F3F3',
    paddingHorizontal: 24,
    paddingVertical: 10,
    flex: 1,
  },

  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Reguler',
    color: '#404040',
    paddingBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#404040',
    borderRadius: 8,
    paddingHorizontal: 2,
    paddingVertical: 0,
  },
});
