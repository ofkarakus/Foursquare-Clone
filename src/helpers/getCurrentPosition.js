import Geolocation from 'react-native-geolocation-service';

const getCurrentPosition = async () => {
  let currentPosition;
  Geolocation.requestAuthorization('whenInUse').then(r => {
    if (r === 'granted') {
      Geolocation.getCurrentPosition(
        position => {
          console.log(position);
          currentPosition = position;
        },
        error => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  });
  return currentPosition;
};

export default getCurrentPosition;
