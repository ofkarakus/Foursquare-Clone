import {StyleSheet} from 'react-native';
import device from '../../constants/device';

const styles = StyleSheet.create({
  btn: {
    width: device.width / 3,
    height: '40%',
    borderColor: '#d8d8dd',
    justifyContent: 'center',
  },
  btnView: {
    alignItems: 'center',
  },
  text: {
    color: '#505457',
    marginTop: 12,
  },
  firstBtn: {
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
  secondBtn: {
    borderBottomWidth: 1,
  },
  thirdBtn: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
  },
  fourthBtn: {
    borderRightWidth: 1,
  },
  sixthBtn: {
    borderLeftWidth: 1,
  },
});

export default styles;
