import {FlatList, StyleSheet, Text, View, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Header,
  TextInput,
  Gap,
  Button,
  ButtonProduct,
  Product,
  Search,
  TextInput2,
} from '../../components';
import {ScrollView} from 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import Axios from 'axios';
import {Searchbar} from 'react-native-paper';
import SearchBar from 'react-native-dynamic-search-bar';
import {
  HeaderSearchBar,
  HeaderClassicSearchBar,
} from 'react-native-header-search-bar';
import {NavigationActions} from 'react-navigation';
import {StackActions} from '@react-navigation/native';

const Dashboard = ({navigation, route}) => {
  const [productData, setProductData] = useState([]);
  const [filterData, setfilterData] = useState([]);
  const [masterData, setmasterData] = useState([]);
  const [inputSearch, setInputSearch] = useState();
  const [searchOn, setSearchOn] = useState(false);
  const [checkfinish, setCheckFinish] = useState([]);
  const dataReducer = useSelector(state => state.StockDataReducer);
  const loginReducer = useSelector(state => state.loginReducer);
  console.log(dataReducer);
  console.log(loginReducer);
  // const [active, setActive] = useState(false);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const {data} = route.params;

  // const onChangeSearch = val3 => setSearch(val3);

  console.log(data.status);
  console.log(data.warehouse_code);
  console.log(data)
 

  const alertFinish = () => {
    Alert.alert(
      //title
      'Confirmation',
      //body
      'Are you sure to finish the stock opname',
      [
        {
          text: 'No',
          onPress: () => navigation.navigate('Dashboard'),
        },
        {
          text: 'Yes',
          onPress: () => FinishCheck(),
        },
      ],
      {cancelable: false},
      //clicking out side of alert will not cancel
    );
  };

  var valCheckFinish;
  const FinishCheck = () => {
    valCheckFinish = {
      branch_code: data.branch,
      transaction_number: data.number.transaction_number,
      // principal_code: data.code,
      group_product: data.group,
      status: data.status,
      warehouse_code: data.warehouse_code,
    };

    //tambah warehouse_code

    console.log(valCheckFinish);
    Axios.post(
      'https://marganusantarajaya.com/api_stock_opname/displayb/finish_stok.php',
      valCheckFinish,
    )
      .then(function (response) {
        console.log(response.data);

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
        // setProductData(stateArray);
        setCheckFinish();
        console.log(setCheckFinish);
        navigation.navigate('FirstPage');
        //     navigation.dispatch(
        //     StackActions.push('SignIn', { test: 'Test Params' })
        // )
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  var valSearch;
  const SearchProduct = () => {
    console.log(inputSearch);

    valSearch = {
      branch_code: data.branch,
      transaction_number: data.number.transaction_number,
      // principal_code: data.code,
      group_product: data.group,
      warehouse_code: data.warehouse_code,
      status: data.status,
      product: inputSearch,
    };

    // console.log(val3)
    Axios.post(
      'https://marganusantarajaya.com/api_stock_opname/displayb/list_product_search.php',
      valSearch,
    )
      .then(function (response) {
        console.log(response.data);
    


        if (response.data == null) {
          //function to make two option alert
          Alert.alert(
            //title
            'Product Name is wrong',
            //body
            'Please make sure the name of product',
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
        setProductData(stateArray);
        setSearchOn(true);
      })
      .catch(err => {
        console.log('error', err);
      });
  };
  // }

  var val3;
  // console.log(data)
  // if (productData == []) {
  //   val3 = {
  //     branch_code: data.branch,
  //     transaction_number: data.number.transaction_number,
  //     // principal_code: data.code,
  //     group_product: data.group,
  //     warehouse_code: data.warehouse_code,
  //     status: data.status,
  //   };
  //   console.log(val3);
  //   Axios.post(
  //     'https://marganusantarajaya.com/api_stock_opname/displayb/list_product_search.php',
  //     val3,
  //   )
  //     .then(function (response) {
  //       // console.log(response.data.length)
  //       var count = Object.keys(response.data).length;
  //       let stateArray = [];
  //       for (var i = 0; i < count; i++) {
  //         stateArray.push({
  //           value: response.data[i],
  //           // label: response.data[i],
  //         });
  //       }
  //       // console.log(stateArray);
  //       setProductData(stateArray);
  //     })
  //     .catch(err => {
  //       console.log('error', err);
  //     });
  // }

  // const searchFilter = (text) => {
  //   if(text) {
  //     const newData = productData.filter((item)=>{
  //       const itemData = item.title ?
  //           item.title : ''
  //       const textData = text;
  //       return itemData.indexOf(textData) > -1;
  //     });
  //     setfilterData(newData);
  //     setSearch(text);
  //   }
  //   else {
  //     setfilterData(productData);
  //     setSearch(text);
  //   }
  // }

  // const ItemView = ({item}) => {
  //   return(
  //     <Text style = {styles.itemview}>
  //       {item.id}{'. '}{item.title}
  //     </Text>
  //   )
  // }

  // const ItemSeparatorView = () => {
  //   return(
  //     <View
  //       style = {{height: 0.5, width: '100%', backgroundColor : '#c8c8c8'}}
  //     />
  //   )
  // }

  const chooseProduct = (e, product ) => {
    console.log(e);
    // e.preventDefault()
    // console.log(product)
    // setActive(!active);
    dispatch({
      type: 'SET_INPUT_DATA',
      value: product,
      
    
    });
    navigation.navigate('InputStock', {
      data: product,
    
     
    });
  };

  // const { spinnerVisibility } = this.state;

  // var valEffect;
  // // console.log(data)
  // useEffect(() => {
  //   valEffect = {
  //     branch_code : data.branch,
  //     transaction_number : data.number.transaction_number,
  //     principal_code : data.code,
  //     warehouse_code : data.warehouse_code,
  //     status : data.status,
  //   }

  //   // console.log(val3)
  //   Axios.post(
  //     'https://marganusantarajaya.com/api_stock_opname/displayb/list_product.php',
  //     valEffect,
  //   )
  //     .then(function (response) {
  //       // console.log(response.data.length)
  //       var count = Object.keys(response.data).length;
  //       let stateArray = [];
  //       for (var i = 0; i < count; i++) {
  //         stateArray.push({
  //           value: response.data[i],
  //           // label: response.data[i],
  //         });
  //       }
  //       // console.log(stateArray);
  //       setProductData(stateArray);
  //     })
  //     .catch(err => {
  //       console.log('error', err);
  //     });
  // }), [];

  return (
    <View style={styles.page}>
      <Header title="Search The Product" subTitle="Make sure it's valid" />
      {/* <View style={styles.searchdesign}> */}
      <TextInput
        placeholderTextColor="#000"
        placeholder="Search Product"
        onChangeText={text => setInputSearch(text)}
        style={styles.searchinput}></TextInput>
      <Gap height={10} />

      <Button
        txt="Search"
        onPress={() => SearchProduct()}
        style={styles.buttonsearch}></Button>
      {/* </View> */}

      {/* <HeaderSearchBar onChangeText={text => console.log(text)} /> */}
      <View style={styles.container}>
        <ScrollView>
          <View>
            {data.status == 'R' ? (
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Poppins-Medium',
                  color: '#6E5DE7',
                  fontWeight: 'light',
                }}>
                List Product Rusak
              </Text>
            ) : null}
            {data.status == 'B' ? (
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Poppins-Medium',
                  color: '#6E5DE7',
                  fontWeight: 'light',
                }}>
                List Product Baru
              </Text>
            ) : null}
            {data.status == 'U' ? (
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Poppins-Medium',
                  color: '#6E5DE7',
                  fontWeight: 'light',
                }}>
                List Product UPB
              </Text>
            ) : null}
          </View>
          <Gap height={8} />    
          <View style={{flexDirection: 'row', alignItems:'center'}}>
            <Text style={{color:'#91C0EB'}}>■</Text>
            <Text style={{fontSize:12, color:'#000'}}> Tidak Terdapat Selisih    </Text>
            <Text style={{color:'#CB4848'}}>■</Text>
            <Text style={{fontSize:12, color:'#000'}}> Terdapat Selisih</Text>
          </View>
          {/* <Text style={styles.text}>List Product</Text> */}
          <Gap height={8} />

          {productData.map(item => {
            return (
              <View key={item.value.num_row}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  // key={item.value.product_code}
                  onPress={e => chooseProduct(e, item.value)}>
                  {console.log(item.value.editted)}

                  {item.value.editted == 2 ? (
                    <View
                      style={{
                        backgroundColor: '#CB4848',
                        borderRadius: 12,
                        paddingHorizontal: 8,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <View style={styles.move}>
                        <Text
                          style={{
                            fontSize: 14,
                            fontFamily: 'Poppins-Medium',
                            color: '#FFF',
                          }}>
                          {item.value.product_name}
                        </Text>
                        {loginReducer.jabatan === 'PAGDG' ? ( <Text
                         >
                         
                        </Text> ) : <Text  style={{
                            fontSize: 12,
                            fontFamily: 'Poppins-Light',
                            color: '#FFF',
                          }}> Stock : {item.value.stok_karton} Karton - {item.value.stok_box} Box - {item.value.stok_unit} Unit</Text>}
                     

                        <Gap height={4} />
                        {loginReducer.jabatan === 'PAGDG' ? ( <View>
                          <Text
                            >
                            
                          </Text>
                        </View>) : <Text style={{
                              fontSize: 15,
                              fontFamily: 'Poppins-Medium',
                              color: '#FFF',
                              fontWeight: 'light',
                            }}>Expired Date : {item.value.ed} </Text>}
                       

                        <Text
                         style={{
                          fontSize: 15,
                          fontFamily: 'Poppins-Medium',
                          color: '#FFF',
                          fontWeight: 'light',
                        }}>
                         Batch : {item.value.batch}
                        </Text>
                       
                        
                       
                      </View>
                    </View>
                  ) : item.value.editted == 1 ? (
                    <View
                      style={{
                        backgroundColor: '#91C0EB',
                        borderRadius: 12,
                        paddingHorizontal: 8,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <View style={styles.move}>
                        <Text
                          style={{
                            fontSize: 14,
                            fontFamily: 'Poppins-Medium',
                            color: '#FFF',
                          }}>
                          {item.value.product_name}
                        </Text>

                        {loginReducer.jabatan === 'PAGDG'  ? (<Text
                          >
                        </Text>) : <Text style={{
                            fontSize: 12,
                            fontFamily: 'Poppins-Light',
                            color: '#FFF',
                          }}>Stock : {item.value.stok_karton} Karton - {item.value.stok_box} Box - {item.value.stok_unit} Unit</Text>}
                        

                        <Gap height={4} />

                        {loginReducer.jabatan === 'PAGDG' ? ( <View>
                          <Text
                           >
                           
                          </Text>
                        </View>) : <Text  style={{
                              fontSize: 15,
                              fontFamily: 'Poppins-Medium',
                              color: '#FFF',
                              fontWeight: 'light',
                            }}>Expired Date : {item.value.ed} </Text>}
                       

                        <Text
                         style={{
                          fontSize: 15,
                          fontFamily: 'Poppins-Medium',
                          color: '#FFF',
                          fontWeight: 'light',
                        }}>
                         Batch : {item.value.batch}
                        </Text>
                       
                       
                      </View>
                    </View>
                  ) : (
                    <View
                      style={{
                        backgroundColor: 'white',
                        borderRadius: 12,
                        paddingHorizontal: 8,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <View style={styles.move}>
                        <Text style={styles.nameProduct}>
                          {item.value.product_name}
                        </Text>
                        

                        <View style={styles.quantity}>

                        {loginReducer.jabatan === 'PAGDG' ? ( <Text >
                          
                        </Text>) : <Text style={styles.quantity}>Stock : {item.value.stok_karton} Karton - {item.value.stok_box} Box - {item.value.stok_unit} Unit</Text>}
                          
                        
                     
                      
                        <Gap height={4} />
                        {loginReducer.jabatan === 'PAGDG' ? (<Text>
                          
                        </Text>) : <Text style={styles.total}>Expired Date : {item.value.ed} </Text>}
                        

                        </View>
                        <Text style={styles.quantityinput}>
                       Batch : {item.value.batch}
                        </Text>
                      
                          
                      </View>
                    </View>
                  )}

                  <Gap height={16} />
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>

        <Gap height={30} />
        {/* <Button txt="Finish Stock Opname" onPress={() => FinishCheck()} /> */}
        {loginReducer.jabatan === 'PAGDG' ? (<Text></Text>) : <Button txt="Finish Stock Opname" onPress={() => alertFinish()} />}
        
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: '#F5F3F3',
    paddingHorizontal: 24,
    paddingVertical: 10,
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    fontWeight: 'bold',
  },
  productstyle: {
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameProduct: {fontSize: 14, fontFamily: 'Poppins-Medium', color: '#000'},
  quantity: {fontSize: 12, fontFamily: 'Poppins-Light', color: '#6E5DE7'},
  quantityinput:{
    fontSize: 15,
                          fontFamily: 'Poppins-Medium',
                          color: '#6E5DE7',
                          fontWeight: 'light',
  },
  total: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: '#6E5DE7',
    fontWeight: 'light',
  },
  totalinput: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: '#071A5B',  
    fontWeight: 'light',
  },
  move: {padding: 8, marginRight: 8, marginLeft: 5},
  info: {},
  itemview: {padding: 15},
  textinputstyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#000',
    backgroundColor: '#fff',
  },
  searchdesign: {flexDirection: 'row', alignItems: 'center', paddingLeft: 15},
  searchinput: {
    // width: 250,
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',
    // marginBottom: 25,
    borderRadius: 8,
  },
  buttonsearch: {},
});
