import {StyleSheet} from 'react-native';
import device from '../../constants/device';
import {getStatusBarHeight, isIPhone12} from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0eff4',
  },
  imgContainer: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#f0eff4',
    alignContent: 'center',
    justifyContent: 'center',
  },
  inputView: {
    width: device.width * 0.9,
    height: 55,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: isIPhone12()
      ? device.height / 2 - getStatusBarHeight(true) + 8
      : device.height / 2 - getStatusBarHeight(true),
    zIndex: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  searchIcon: {
    marginLeft: 15,
    marginRight: 20,
  },
  secretView: {
    marginBottom: 55,
    height: 1,
    width: '100%',
  },
  linearGradient: {
    width: device.width,
    height: device.height / 10,
    position: 'absolute',
    top: isIPhone12()
      ? device.height / 2 - device.height / 10 - getStatusBarHeight(true) + 8
      : device.height / 2 - device.height / 10 - getStatusBarHeight(true),
    zIndex: 1,
  },
});

export default styles;
