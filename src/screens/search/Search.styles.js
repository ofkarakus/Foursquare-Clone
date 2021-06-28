import {StyleSheet, Dimensions} from 'react-native';

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
  inputView: {
    width: Dimensions.get('window').width * 0.9,
    height: 55,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: Dimensions.get('window').height / 2.23,
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
