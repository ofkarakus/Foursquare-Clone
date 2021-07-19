import React, {useState} from 'react';
import {SafeAreaView, StatusBar, FlatList, View, TextInput} from 'react-native';
import VenueCard from '../../../components/search/venue-list/VenueCard';
import styles from './VenueList.style';
import {LeftArrow, Compass, Map} from '../../../components/icons';

const VenueList = ({route}) => {
  const {response} = route.params;
  const [color, setColor] = useState('white');
  const [backgroundColor, setBackgroundColor] = useState('#2850e0');

  const renderVenues = ({item, index}) => {
    return <VenueCard item={item} index={index} />;
  };

  const onFocus = () => {
    setColor('#949494');
    setBackgroundColor('white');
  };
  const onBlur = () => {
    setColor('white');
    setBackgroundColor('#2850e0');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        barStyle="light-content"
        showHideTransition="slide"
        translucent={false}
        backgroundColor="red"
      />
      <FlatList
        keyExtractor={venue => venue.id}
        data={response.venues}
        renderItem={renderVenues}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListFooterComponent={<View style={styles.separator} />}
        ListHeaderComponent={
          <View style={styles.headerContainer}>
            <View style={styles.headerInputDiv}>
              <LeftArrow
                fill="#9b9b9b"
                width={25}
                height={25}
                style={styles.leftArrow}
              />
              <TextInput style={styles.headerInput} />
            </View>
            <View style={[styles.mapInputDiv, {backgroundColor}]}>
              <Compass
                style={styles.compass}
                fill={color}
                width={20}
                height={20}
              />
              <TextInput
                placeholder="Near me"
                placeholderTextColor={color}
                style={styles.mapInput}
                onFocus={onFocus}
                onBlur={onBlur}
              />
              <Map style={styles.map} fill={color} width={25} height={25} />
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default VenueList;
