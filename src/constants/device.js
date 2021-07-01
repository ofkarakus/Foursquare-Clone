import {Dimensions, Platform} from 'react-native';

const device = {
  ios: Platform.OS === 'ios',
  android: Platform.OS === 'android',
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
};

export default device;
