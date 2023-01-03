import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Picker} from '@react-native-picker/picker';

const Select = ({label, value, onSelectChange, label_code}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        {/* <Picker
          style={{width: '100%'}}
          mode="dropdown"
          selectedValue={move.client}
          onValueChange={this.handleChange('client')}>
          {this.state.clients !== '' ? (
            this.state.clients.map(client => {
              return <Picker.Item label={client.name} value={client.id} />;
            })
          ) : (
            <Picker.Item label="Loading..." value="0" />
          )}
        </Picker> */}
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
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
