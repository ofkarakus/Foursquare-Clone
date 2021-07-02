import axios from 'axios';
import Config from 'react-native-config';

/**
 *
 * @param {String} query
 * @param {String} currentPosition
 */

const search = async (query, currentPosition) => {
  const tmpDate = new Date();
  const date = tmpDate.toISOString().slice(0, 10).split('-').join('');
  const location = `${currentPosition.coords.latitude},${currentPosition.coords.longitude}`;

  const {data} = await axios
    .get(Config.API_SEARCH_URL, {
      params: {
        client_id: Config.CLIENT_ID,
        client_secret: Config.CLIENT_SECRET,
        ll: location,
        query: query,
        v: date,
        limit: 1,
      },
    })
    .catch(e => console.log(e));
  return data.response.venues;
};

export default search;
