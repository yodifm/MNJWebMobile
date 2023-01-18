import {StyleSheet, Text, View, Alert, RefreshControl,} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
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

const initState = {
  branch: '',
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

  // useEffect(() => {
  //   val3 = {
  //     branch_code : loginReducer.kode_cbg
  //   }

  //   console.log(val3)
  //   Axios.post(
  //     'https://marganusantarajaya.com/api_stock_opname/display/list_number_stock.php',
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

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 200);
  }, []);

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
    console.log(value.transaction_number);
    val3 = {
      branch_code: branch_code,
      transaction_number: value.transaction_number,
    };
    Axios.post(
      'https://marganusantarajaya.com/api_stock_opname/display/list_principal.php',
      val3,
    )
      .then(function (response) {
        console.log(response.data)
        // if (response.data == null) {
        //   //function to make two option alert
        //   Alert.alert(
        //     //title
        //     'Product Has been finish',
        //     //body
        //     'Please choose another product',
        //     [
        //       {
        //         text: 'OK',
        //         onPress: () => console.log('Yes Pressed'),
        //       },
        //     ],
        //     {cancelable: false},
        //     //clicking out side of alert will not cancel
        //   );
        // }
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
    console.log(chosen.number);
    val4 = {
      branch_code: branch_code,
      transaction_number: chosen.number.transaction_number,
      principal_code: value.value,
    };
    console.log(val4);
    Axios.post(
      'https://marganusantarajaya.com/api_stock_opname/display/list_warehouse.php',
      val4,
    )
      .then(function (response) {
        console.log(response.data);
        // if (response.data == null) {
        //   //function to make two option alert
        //   Alert.alert(
        //     //title
        //     'Product Has been finish',
        //     //body
        //     'Please choose another product',
        //     [
        //       {
        //         text: 'OK',
        //         onPress: () => console.log('Yes Pressed'),
        //       },
        //     ],
        //     {cancelable: false},
        //     //clicking out side of alert will not cancel
        //   );
        // }
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
    console.log(chosen.number);
    console.log(chosen.warehouse_code);
    val5 = {
      branch_code: branch_code,
      transaction_number: chosen.number.transaction_number,
      principal_code: chosen.code,
      warehouse_code: value.value,
    };
    console.log(val5);

    Axios.post(
      'https://marganusantarajaya.com/api_stock_opname/display/list_status.php',
      val5,
    )
      .then(function (response) {
        console.log(response.data);
        // if (response.data == null) {
        //   //function to make two option alert
        //   Alert.alert(
        //     //title
        //     'Product Has been finish',
        //     //body
        //     'Please choose another product',
        //     [
        //       {
        //         text: 'OK',
        //         onPress: () => console.log('Yes Pressed'),
        //       },
        //     ],
        //     {cancelable: false},
        //     //clicking out side of alert will not cancel
        //   );
        // }
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
            'Data Empty',
            //body
            'Data Dont Finish Yet',
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
    <ScrollView contentContainerStyle={{flexGrow: 1}} refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }>
      <View style={{}}>
        <Header
          title="Stock Opname"
          subTitle="Click start after you filled"
          onBack={() => {}}
        />
        <View style={styles.container}>
          <Gap height={24} />
          {console.log(dataReducer)}

          <Dropdown
            itemTextStyle={styles.itemTextStyle}
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
            placeholder={'Select Number'}
            searchPlaceholder="Search..."
            value={chosen.number}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setChosen({...chosen, number: item});
              handleCode(item);
              setIsFocus(false);
            }}
          />
          <Gap height={16} />

          <Dropdown
            itemTextStyle={styles.itemTextStyle}
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
            placeholder={'Select Principle'}
            searchPlaceholder="Search..."
            value={chosen.code}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setChosen({...chosen, code: item.value});
              handleWarehouse(item);
              setIsFocus(false);
            }}
          />

          <Gap height={16} />
          <Dropdown
            itemTextStyle={styles.itemTextStyle}
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
              handlestatus(item);
              setIsFocus(false);
            }}
          />

          <Gap height={16} />
          <Dropdown
            itemTextStyle={styles.itemTextStyle}
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
              setChosen({...chosen, status: item.value, branch: branch_code});
              setIsFocus(false);
            }}
          />

          <Gap height={30} />
          <Button txt="Start Stock Opname" onPress={onSubmit} />
          <Gap height={30} />
          <Button txt="List Closing Transaction" color='red' onPress={SearchClosing} />
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
