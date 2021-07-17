import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  TextInput,
  ImageBackground,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import ActivityBtn from '../../components/search/ActivityButton';
import styles from './Search.styles';
import {Search} from '../../components/icons';
import buttonArray from '../../constants/buttonArray';
import LinearGradient from 'react-native-linear-gradient';
import getCurrentPosition from '../../helpers/getCurrentPosition';
import search from '../../helpers/search';
import {useSelector, useDispatch} from 'react-redux';

const SearchScreen = ({navigation}) => {
  const [query, setQuery] = useState('');
  const [preloaderModal, setPreloaderModal] = useState(false);

  const currentPosition = useSelector(state => state.currentPosition);
  const dispatch = useDispatch();

  const handleChange = text => setQuery(text);

  const getResults = async text => {
    if (text) {
      setPreloaderModal(true);
      const r = await search(text, currentPosition).catch(e => {
        console.log(e);
        setPreloaderModal(false);
        return;
      });
      setPreloaderModal(false);
      navigation.navigate('VenueList', {response: r});
    }
  };

  useEffect(() => {
    getCurrentPosition(dispatch);
  }, []);

  return preloaderModal ? (
    <View style={[styles.preloaderContainer, styles.horizontal]}>
      <ActivityIndicator size="large" />
    </View>
  ) : (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        barStyle="light-content"
        showHideTransition="slide"
        translucent={true}
        backgroundColor="transparent"
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
        <Search
          fill={'#979b9e'}
          width="18"
          height="18"
          style={styles.searchIcon}
          onPress={() => {
            getResults(query);
          }}
        />
        <TextInput
          placeholder="What are you looking for?"
          placeholderTextColor="#a8acab"
          style={styles.input}
          onChangeText={handleChange}
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
            onPress={() => {
              getResults(item.text);
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default SearchScreen;
