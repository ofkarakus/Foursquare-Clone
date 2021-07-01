import {StyleSheet} from 'react-native';
import device from '../../constants/device';

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
    top: device.height / 2.23,
    zIndex: 1,
  },
  searchIcon: {
    marginLeft: 15,
    marginRight: 20,
  },
  secretView: {
    marginBottom: 25,
    height: 1,
    width: '100%',
  },
});

export default styles;
