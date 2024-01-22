import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
const SearchQuery = () => {
  const [search, onChangeSearch] = useState('');
  return (
    <View style={styles.searchQuery}>
      <TextInput
        keyboardType="web-search"
        onChangeText={onChangeSearch}
        value={search}
        style={styles.input}
        placeholder='Search for movie'
      />
      <Button title="Search" />
    </View>
  );
};
const styles = StyleSheet.create({
  searchQuery: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  input: {
    flex: 1,
    fontSize: 20,
  },
});
export default SearchQuery;
