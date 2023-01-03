import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Header, Product, TextInput2, Gap, Button, ProductHistory} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import Axios from 'axios';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {IcBack} from '../../assets';

const initState = {
  unit1: '',
  unit2: '',
  unit3: '',
};

const InputStock = ({navigation, route}) => {
  var valselisih, valhistory;

  const dataReducer = useSelector(state => state.StockDataReducer);
  const loginReducer = useSelector(state => state.loginReducer);
  console.log(dataReducer);
  console.log(loginReducer);
  const [stock, setStock] = useState(initState);
  const [selisih, setSelisih] = useState([]);
  const [history, setHistory] = useState([]);

  const {data} = route.params;

  console.log(data);

  const displayunit = `${data.stok_karton} Karton - ${data.stok_box} Box - ${data.stok_unit} Unit`;
  const displaytotal = `${data.stok_total} Unit`;


  console.log(data.product_name);
  const [number, setNumber] = useState('111');

  const [renderComponentB, setRenderComponentB] = useState(false);
  
  const [test, setTest] = useState(false);

  useEffect(() => {
    valhistory = {
      branch_code: dataReducer.branch_code,
      transaction_number: dataReducer.transaction_number,
      principal_code: dataReducer.principal_code,
      status: dataReducer.status,
      warehouse_code: dataReducer.warehouse_code,

      product_code: data.product_code,
    };

    // console.log(val3)
    Axios.post(
      'https://marganusantarajaya.com/api_stock_opname/display/history_stok.php',
      valhistory,
    )
      .then(function (response) {
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
        setHistory(stateArray);
        setTest(true)
      })
      .catch(err => {
        console.log('error', err);
      });
      
  }, [test]);

  const insert_data = () => {
    console.log(loginReducer.username);
    console.log(dataReducer.warehouse_code);
    console.log(stock);
    console.log(data);
    console.log(data.product_code);
    Axios.post(
      'https://marganusantarajaya.com/api_stock_opname/display/input_soh.php',
      {
        key_in_user: loginReducer.username,

        branch_code: dataReducer.branch_code,
        transaction_number: dataReducer.transaction_number,
        principal_code: dataReducer.principal_code,
        status: dataReducer.status,
        warehouse_code: dataReducer.warehouse_code,

        product_code: data.product_code,
        unit1: stock.unit1,
        unit2: stock.unit2,
        unit3: stock.unit3,
      },
    )
      .then(function (response) {
        console.log(dataReducer.transaction_number);
        console.log(typeof branch_code);
        // console.log(branch_code)
        console.log(response.config);
        console.log(dataReducer);
        console.log(data);
        console.log(data.product_code);
        valselisih = {
          branch_code: dataReducer.branch_code,
          transaction_number: dataReducer.transaction_number,
          principal_code: dataReducer.principal_code,
          status: dataReducer.status,
          warehouse_code: dataReducer.warehouse_code,

          product_code: data.product_code,
        };
        // console.log(response.data.length)

        Axios.post(
          'https://marganusantarajaya.com/api_stock_opname/display/selisih_stok.php',
          valselisih,
        )
          .then(function (response1) {
            console.log(response1);
            console.log(response1.data);
            console.log(response1.data[0].selisih);
            console.log(response1.config.data);
            setSelisih(response1.data[0]);
            setRenderComponentB(true);
          })
          .catch(err => {
            console.log('error', err);
          });
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  return (
    <ScrollView>

    <View style={styles.page}>
      <Header
        title="Stock Opname"
        subTitle="Click start after you filled"
        onBack={() => {}}
        moveBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <Product
          label={data.product_name}
          quantity={displayunit}
          total={displaytotal}
          selisih_num={`Selisih: ${selisih.selisih}`}
          input_num={`Input: ${selisih.input}`}
        />
        <Gap height={14} />
        <Text style={styles.label}>Input Stock</Text>
        <Gap height={14} />
        <View style={styles.text}>
          <View style={styles.container1}>
            <TextInput
              style={styles.input1}
              placeholder="Karton"
              keyboardType="number-pad"
              onChangeText={item => {
                setStock({...stock, unit1: item});
              }}
            />
            <Gap width={30} />
            <TextInput
              style={styles.input1}
              placeholder="Box"
              keyboardType="number-pad"
              onChangeText={item => {
                setStock({...stock, unit2: item});
              }}
            />
            <Gap width={30} />
            <TextInput
              style={styles.input1}
              placeholder="Unit"
              keyboardType="number-pad"
              onChangeText={item => {
                setStock({...stock, unit3: item});
              }}
            />
          </View>
        </View>
        <Gap height={24} />
        <Button
          style={styles.button}
          txt="Save Data"
          color="#2442AF"
          textcolor="#fff"
          onPress={insert_data}
        />

        <Gap height={20} />
        {/* <Text style={styles.label}>Latest Historical </Text>
        {console.log(selisih)}
        {renderComponentB != false ? (
          <Product
            label={selisih.selisih}
            quantity="7C - 2B - 3C"
            total="3000 Units"
          />
        ) : null} */}

        <Gap height={20} />

        {history.map(item => {
          return (
           
              <ProductHistory
                label={item.value.product_name}
                quantity={`${item.value.unit1} Karton - ${item.value.unit2} Box - ${item.value.unit3} Unit`}
                total={item.value.total}
                key_user={item.value.key_in_user}
                key_date= {`Date: ${item.value.key_in_date}`}
                key_time={`Time: ${item.value.key_in_time}`}
              />
          

            // <ButtonProduct
            // label={item.product_name}
            // quantityK={item.stok_karton}
            // quantityB={item.stok_box}
            // quantityU={item.stok_unit}
            // quantityTotal={item.stok_total}
            // key={item.product_code}
            // />
          );
        })}

        {/* <Product
          label={data[0].selisih}
          quantity="7C - 2B - 3C"
          total="3000 Units"
        /> */}
        <Gap height={16} />
        {/* <Product
          label={selisih.selisih}
          quantity="7C - 2B - 3C"
          total="3000 Units"
        /> */}
      </View>
    </View>
    </ScrollView>
  );
};

export default InputStock;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
  },
  text: {flexDirection: 'row', paddingHorizontal: 15, alignSelf: 'center'},
  label: {
    fontSize: 18,
    fontFamily: 'Poppins-ligth',
    color: 'black',
    fontWeight: '200',
    paddingLeft: 8,
  },
  button: {width: 315, paddingHorizontal: 30},
  container1: {
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label1: {
    fontSize: 16,
    fontFamily: 'Poppins-Reguler',
    color: '#C7C9D9',
    paddingBottom: 8,
  },
  input1: {
    borderWidth: 1,
    borderColor: '#C7C9D9',
    borderRadius: 8,
    padding: 10,
    width: 83,
  },
});
