import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import VenueCard from '../../../components/search/venue-list/VenueCard';

const VenueList = ({route}) => {
  const {response} = route.params;

  const renderVenues = venue => {
    return <VenueCard item={venue.item} />;
  };

  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={venue => venue.id}
        data={response.venues}
        renderItem={renderVenues}
      />
    </SafeAreaView>
  );
};

export default VenueList;
