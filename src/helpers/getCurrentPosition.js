import Geolocation from 'react-native-geolocation-service';

const getCurrentPosition = async setCurrentPosition => {
  const authorization = await Geolocation.requestAuthorization('whenInUse');
  if (authorization === 'granted') {
    Geolocation.getCurrentPosition(
      position => {
        setCurrentPosition(position);
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }
};

export default getCurrentPosition;
