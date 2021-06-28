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
    alignContent: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: Dimensions.get('window').width / 3,
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
