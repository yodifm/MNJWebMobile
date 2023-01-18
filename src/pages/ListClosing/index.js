import {FlatList, StyleSheet, Text, View } from 'react-native';
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
import { StackActions } from '@react-navigation/native';

const ListClosing = ({navigation, route}) => {
  const {data_closing, branch_code} = route.params;
  const [closingData, setClosingData] = useState([]);

  console.log(data_closing);
  console.log(branch_code);
  console.log(data_closing[0].value.transaction_number)

  var valClosingData;

  const DataClosing = () => {
    // console.log(inputSearch);
    // console.log(.kode_cbg);
    for (var i = 0; i < data_closing.length; i++) {
      valClosingData = {
        branch_code: branch_code,
        transaction_number: data_closing[i].value.transaction_number,
      };

      // console.log(val3)
      Axios.post(
        'https://marganusantarajaya.com/api_stock_opname/display/closing_stok.php',
        valClosingData,
      )
        .then(function (response) {
          console.log(response);
          
          // console.log(branch_code);
          // console.log(data_closing[i].map);

          // console.log(stateArray);
        })
        .catch(err => {
          console.log('error', err);
        });
      }
      navigation.dispatch(
        StackActions.replace('SignIn', { test: 'Test Params' })
    )
  };

  return (
    <View>
      <View>
      <Header
        title="List Closing"
        subTitle="Make sure the transaction number"
        onBack={() => {}}
        moveBack={() => navigation.goBack()}
      />
      </View>
      {data_closing.map(item => {
        return (
          <View key={item.value.transaction_number}>
           <Gap height={15}/>
            <View
                      style={{
                        backgroundColor: 'white',
                        borderRadius: 12,
                        paddingHorizontal: 8,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <View style={styles.move}>
                        <Text
                          style={{
                            fontSize: 14,
                            fontFamily: 'Poppins-Light',
                            color: '#000',
                          }}>
                          Branch Code : {branch_code}
                        </Text>
                        
                        <Gap height={8} />
                        <View>
                          <Text
                            style={{
                              fontSize: 15,
                              fontFamily: 'Poppins-Light',
                              color: '#000',
                              fontWeight: 'light',
                            }}>
                            Transaction Number : {item.value.transaction_number}
                          </Text>
                        </View>

                        <Gap height={8} />
                        <View>
                          <Text
                            style={{
                              fontSize: 15,
                              fontFamily: 'Poppins-Light',
                              color: '#000',
                              fontWeight: 'light',
                            }}>
                            Date : {item.value.transaction_date}
                          </Text>
                        </View>
                      </View>
                    </View>
          </View>

        
        
        );
      })}
      <Gap height={20}/>
      <Button txt="Closing" onPress={() => DataClosing()} />
    </View>
  );
};

export default ListClosing;

const styles = StyleSheet.create({
  move: {padding: 8, marginRight: 8, marginLeft: 5},

});
