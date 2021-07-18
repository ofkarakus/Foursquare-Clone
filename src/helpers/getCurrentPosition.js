import Geolocation from 'react-native-geolocation-service';
import device from '../constants/device';

const getCurrentPosition = async dispatch => {
  if (device.ios) {
    try {
      const authorization = await Geolocation.requestAuthorization('whenInUse');
      if (authorization === 'granted') {
        Geolocation.getCurrentPosition(
          position => {
            dispatch({
              type: 'SET_CURRENT_POSITION',
              payload: {currentPosition: position},
            });
          },
          error => console.log(error.code, error.message),
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    } catch (error) {
      console.log(error);
    }
  } else if (device.android) {
    Geolocation.getCurrentPosition(
      position => {
        dispatch({
          type: 'SET_CURRENT_POSITION',
          payload: {currentPosition: position},
        });
      },
      error => console.log(error.code, error.message),
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }
};

export default getCurrentPosition;
