import React from 'react';
import {View, Image, TextInput, TouchableOpacity, Text} from 'react-native';
import styles from './Search.styles';

const Search = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/dining-table.jpeg')}
        style={styles.imgContainer}
      />
      <View>
        <TextInput style={styles.searchBar} />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.firstBtn}>
          <Text>Breakfast</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.firstBtn}>
          <Text>Lunch</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.firstBtn}>
          <Text>Dinner</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.firstBtn}>
          <Text>Coffee & Tea</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.firstBtn}>
          <Text>Nightlife</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.firstBtn}>
          <Text>Things to do</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;
