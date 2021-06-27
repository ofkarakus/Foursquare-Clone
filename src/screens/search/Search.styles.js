import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1},
  imgContainer: {
    flex: 0.9,
    resizeMode: 'cover',
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#f0eff4',
  },
  firstBtn: {
    width: Dimensions.get('window').width / 3,
    height: '50%',
  },
});

export default styles;
