import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Searchbar } from 'react-native-paper';



const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View >
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        clearIcon="camera"
      /> 
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  label:{fontSize:16, fontFamily: 'Poppins-Reguler', color:'#404040', paddingBottom:8},
input:{borderWidth:1, borderColor:'#404040', borderRadius:8, paddingHorizontal:2, paddingVertical:0}
})