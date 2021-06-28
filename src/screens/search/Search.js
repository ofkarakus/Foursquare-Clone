import React from 'react';
import {
  View,
  Image,
  TextInput,
  TouchableHighlight,
  Text,
  ImageBackground,
} from 'react-native';
import styles from './Search.styles';
import {
  Breakfast,
  Lunch,
  Dinner,
  CoffeeTea,
  NightLife,
  ThingsToDo,
  Loupe,
} from '../../components/icons';

const iconSize = '45';
const iconColor = '#4f5659';
const btnUnderlayColor = '#e0e0e0';

const Search = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/dining-table.jpeg')}
        style={styles.imgContainer}>
        <Image source={require('../../assets/images/city-guide-logo.png')} />
      </ImageBackground>
      <View style={styles.inputView}>
        <Loupe
          fill={'#979b9e'}
          width="18"
          height="18"
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="What are you looking for?"
          placeholderTextColor="#a8acab"
          style={styles.input}
        />
      </View>
      <View style={styles.btnContainer}>
        <View style={styles.secretView} />
        <TouchableHighlight
          underlayColor={btnUnderlayColor}
          onPress={() => console.log('press')}
          style={[styles.btn, styles.firstBtn]}>
          <View style={styles.btnView}>
            <Breakfast width={iconSize} height={iconSize} fill={iconColor} />
            <Text style={styles.text}>Breakfast</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={btnUnderlayColor}
          onPress={() => console.log('press')}
          style={[styles.btn, styles.secondBtn]}>
          <View style={styles.btnView}>
            <Lunch width={iconSize} height={iconSize} fill={iconColor} />
            <Text style={styles.text}>Lunch</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={btnUnderlayColor}
          onPress={() => console.log('press')}
          style={[styles.btn, styles.thirdBtn]}>
          <View style={styles.btnView}>
            <Dinner width={iconSize} height={iconSize} fill={iconColor} />
            <Text style={styles.text}>Dinner</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={btnUnderlayColor}
          onPress={() => console.log('press')}
          style={[styles.btn, styles.fourthBtn]}>
          <View style={styles.btnView}>
            <CoffeeTea width={iconSize} height={iconSize} fill={iconColor} />
            <Text style={styles.text}>Coffee & Tea</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={btnUnderlayColor}
          onPress={() => console.log('press')}
          style={[styles.btn, styles.fifthBtn]}>
          <View style={styles.btnView}>
            <NightLife width={iconSize} height={iconSize} fill={iconColor} />
            <Text style={styles.text}>Nightlife</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={btnUnderlayColor}
          onPress={() => console.log('press')}
          style={[styles.btn, styles.sixthBtn]}>
          <View style={styles.btnView}>
            <ThingsToDo width={iconSize} height={iconSize} fill={iconColor} />
            <Text style={styles.text}>Things to do</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Search;
