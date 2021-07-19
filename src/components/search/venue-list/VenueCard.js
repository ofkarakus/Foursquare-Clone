import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './VenueCard.style';
import getDetails from '../../../helpers/getDetails';
import {useSelector} from 'react-redux';
import getDistanceMile from '../../../helpers/getDistanceMile';

const VenueCard = ({item, index, separators}) => {
  const [venue, setVenue] = useState();
  const [distance, setDistance] = useState();
  const currentPosition = useSelector(state => state.currentPosition);

  const imgSrc = venue?.photos?.groups[0]?.items[0];
  let imgUrl;
  if (venue && imgSrc) {
    imgUrl = imgSrc.prefix + 'original' + imgSrc.suffix;
  }
  const comment = venue?.tips?.groups[0]?.items[0];

  useEffect(() => {
    if (!venue) {
      console.log('eff');
      getDetails(item.id)
        .then(r => {
          setVenue(r);
          getDistanceMile(r.location, currentPosition.coords)
            .then(res => setDistance(res))
            .catch(err => console.log(err));
        })
        .catch(e => console.log(e));
    }
  }, []);

  if (!venue) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={
            imgUrl
              ? {uri: imgUrl}
              : require('../../../assets/images/foursquareIcon.png')
          }
        />
        <View style={styles.infoSection}>
          <Text style={styles.name}>
            {index + 1}. {venue.name}
          </Text>
          <Text>
            <Text style={styles.shortName}>
              {venue.categories[0].shortName}{' '}
            </Text>
            <Text style={styles.price}>{'$'.repeat(venue.price?.tier)}</Text>
            <Text style={styles.notPrice}>
              {'$'.repeat(4 - venue.price?.tier)}
            </Text>
          </Text>
          <Text style={styles.distance}>{distance} mile</Text>
        </View>

        <View
          style={[
            styles.ratingDiv,
            {backgroundColor: `#${venue.ratingColor}`},
          ]}>
          <Text style={styles.rating}>{venue.rating || '-'}</Text>
        </View>
      </View>
      {comment && (
        <View style={styles.commentDiv}>
          <Text style={styles.comment} ellipsizeMode="tail" numberOfLines={2}>
            "{comment.text}"
          </Text>
          <Text style={styles.userName}>
            {comment.user.firstName + ' ' + comment.user.lastName}
          </Text>
        </View>
      )}
    </View>
  );
};

export default VenueCard;
