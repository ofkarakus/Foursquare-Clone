import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  separator: {
    height: 1,
    backgroundColor: '#e9e9e9',
  },
  headerContainer: {
    backgroundColor: '#2850e0',
    padding: 10,
  },
  headerInputDiv: {
    backgroundColor: 'white',
    marginBottom: 1,
  },
  headerInput: {
    height: 45,
    paddingLeft: 45,
  },
  leftArrow: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  mapInputDiv: {
    flexDirection: 'row',
    borderBottomColor: '#436ce7',
    borderBottomWidth: 1,
  },
  mapInput: {
    height: 45,
    paddingLeft: 45,
  },
  compass: {
    position: 'absolute',
    top: 12.5,
    left: 12.5,
  },
  map: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default styles;
