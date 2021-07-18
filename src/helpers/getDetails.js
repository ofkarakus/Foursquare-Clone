import axios from 'axios';
import Config from 'react-native-config';

/**
 *
 * @param {String} venueId
 */

const getDetails = async venueId => {
  const tmpDate = new Date();
  const date = tmpDate.toISOString().slice(0, 10).split('-').join('');

  const {data} = await axios
    .get(Config.API_DETAILS_URL + venueId, {
      params: {
        client_id: Config.CLIENT_ID,
        client_secret: Config.CLIENT_SECRET,
        v: date,
      },
    })
    .catch(e => console.log(e));
  return data.response.venue;
};

export default getDetails;
