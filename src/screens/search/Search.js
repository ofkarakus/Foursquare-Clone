import React, {useEffect, useState} from 'react';
import {View, Image, TextInput, ImageBackground, StatusBar} from 'react-native';
import ActivityBtn from '../../components/search/ActivityButton';
import styles from './Search.styles';
import {Loupe} from '../../components/icons';
import buttonArray from '../../constants/buttonArray';
import LinearGradient from 'react-native-linear-gradient';
import getCurrentPosition from '../../helpers/getCurrentPosition';

const Search = () => {
  const [currentPosition, setCurrentPosition] = useState();

  useEffect(() => {
    getCurrentPosition().then(r => {
      setCurrentPosition(r);
    });
  }, []);

  console.log(currentPosition);

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        barStyle="light-content"
        showHideTransition="slide"
      />
      <ImageBackground
        source={require('../../assets/images/dining-table.jpeg')}
        style={styles.imgContainer}>
        <Image source={require('../../assets/images/city-guide-logo.png')} />
      </ImageBackground>
      <LinearGradient
        colors={['rgba(255,255,255,0.01)', 'rgba(240,239,244,1)']}
        style={styles.linearGradient}
      />
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
        {buttonArray.map(item => (
          <ActivityBtn
            key={item.id}
            text={item.text}
            icon={item.icon}
            style={item.style}
          />
        ))}
      </View>
    </View>
  );
};

export default Search;
