import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Header, TextInput, Gap, Button, ButtonProduct, Product, Search, TextInput2 } from '../../components'
import { ScrollView } from 'react-native-gesture-handler'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import Axios from 'axios';
import { Searchbar } from 'react-native-paper';
import SearchBar from "react-native-dynamic-search-bar";
import {
  HeaderSearchBar,
  HeaderClassicSearchBar
} from "react-native-header-search-bar";






const Dashboard = ({navigation, route}) => {
  
const [productData, setProductData] = useState([]);
const [filterData, setfilterData] = useState([]);
const [masterData, setmasterData] = useState([]);
const [search, setSearch] = useState('');
const dispatch = useDispatch();

const {data} = route.params;

// const onChangeSearch = val3 => setSearch(val3);


console.log(data.status)

var val3;
// console.log(data)
useEffect(() => {
  val3 = {
    branch_code : data.branch,
    transaction_number : data.number.transaction_number,
    principal_code : data.code,
    warehouse_code : data.warehouse_code,
    status : data.status,
  }
  
  // console.log(val3)
  Axios.post(
    'https://marganusantarajaya.com/api_stock_opname/display/list_product.php',
    val3,
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
      setProductData(stateArray);
    })
    .catch(err => {
      console.log('error', err);
    });
});

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

const chooseProduct = (e, product) => {
  console.log(e)
  // e.preventDefault()
  // console.log(product)
    dispatch({   
    type:'SET_INPUT_DATA',
    value: product
  });
    navigation.navigate("InputStock", {
    data: product,
    })
    };


  
  
 
    // const { spinnerVisibility } = this.state;
  
  return (
    <View style={styles.page}>
      
      <Header title="Search The Product" subTitle="Make sure it's valid"/>
      {/* <SearchBar
      fontColor="#c6c6c6"
      iconColor="#c6c6c6"
      shadowColor="#282828"
      cancelIconColor="#c6c6c6"
      backgroundColor="#353d5e"
      placeholder="Search here"
      onChangeText={(text) => this.filterList(text)}
      onSearchPress={() => console.log("Search Icon is pressed")}
      onClearPress={() => this.filterList("")}
      onPress={() => alert("onPress")}
    /> */}
      {/* <TextInput
        style={styles.textinputstyle}
        value={search}
        placeholder="Search Product"
        onChangeText={(text) => searchFilter(text)}
      /> */}

      {/* <Searchbar
      placeholder='Search'
      onChangeText={onChangeSearch}
      value={search}
      
      /> */}

      
      {/* <Search/> */}
      
      {/* <HeaderSearchBar onChangeText={text => console.log(text)} /> */}
      <View style={styles.container}>
            
            <ScrollView>
                  <View>    
                      {data.status == "R" ? <Text style={{fontSize: 18, fontFamily:'Poppins-Medium', color:'#6E5DE7', fontWeight:'light'}}>Barang rusak</Text> :null} 
                      {data.status == "B" ? <Text style={{fontSize: 18, fontFamily:'Poppins-Medium', color:'#6E5DE7', fontWeight:'light'}}>Barang Baru</Text> :null} 
                      {data.status == "U" ? <Text style={{fontSize: 18, fontFamily:'Poppins-Medium', color:'#6E5DE7', fontWeight:'light'}}>Barang UPB</Text> :null} 
                  </View>
                <Gap height={8}/>
              <Text style={styles.text}>List Product</Text>
                <Gap height={8}/>
                 
                {productData.map(item => {
                return (
                  <TouchableOpacity activeOpacity={0.5} key={item.value.product_code} onPress={(e) => chooseProduct(e, item.value)} >
                  <View style={styles.productstyle}>
                       <View style={styles.move}>
                           <Text style={styles.nameProduct}>{item.value.product_name}</Text>
                              <Text style={styles.quantity}>{item.value.stok_karton} Karton</Text>
                              <Text style={styles.quantity}>{item.value.stok_box} Box</Text>
                              <Text style={styles.quantity}>{item.value.stok_unit} Unit</Text>  
                           <Gap height={8}/>
                           <View>
                            <Text style={styles.total}>Total Unit {item.value.stok_total}</Text>
                          </View>  
                       </View>
                           
                      
                   </View>
                   <Gap height={16}/> 
               </TouchableOpacity>
           
                  // <ButtonProduct 
                  // label={item.product_name} 
                  // quantityK={item.stok_karton}
                  // quantityB={item.stok_box}
                  // quantityU={item.stok_unit}
                  // quantityTotal={item.stok_total}
                  // key={item.product_code}
                  // />
                );
              })
            } 

            

              
            </ScrollView>
            
            <Gap height={30}/>
            <Button txt="Finish Stock Opname" onPress={() => navigation.navigate('')}/> 
           
        </View>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
    page:{flex:1},
    container:{backgroundColor:'#F5F3F3', paddingHorizontal:24, paddingVertical:10, flex:1},
    text:{fontSize:18, fontFamily:'Poppins-Medium', color:'black', fontWeight:'bold'},  
    productstyle:{backgroundColor:'white', borderRadius:12, paddingHorizontal:8, flexDirection:'row', alignItems:'center'},
    nameProduct:{fontSize: 14, fontFamily:'Poppins-Medium', color:'#000'},
    quantity:{fontSize: 12, fontFamily:'Poppins-Light', color:'#C7C9D9'},
    total:{fontSize: 15, fontFamily:'Poppins-Medium', color:'#6E5DE7', fontWeight:'light'},
    move:{padding:8, marginRight:8, marginLeft:5},
    info:{},
    itemview:{padding: 15},
    textinputstyle:{height:40, borderWidth:1, paddingLeft:20, margin:5, borderColor:"#000", backgroundColor:'#fff'}
})