import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 5,
  },
  header: {
    flexDirection: 'row',
  },
  name: {
    color: '#2850e0',
    fontWeight: 'bold',
  },
  shortName: {
    color: '#949494',
    fontWeight: 'bold',
  },
  distance: {
    color: '#949494',
  },
  price: {
    color: '#949494',
  },
  notPrice: {
    color: '#f0f0f0',
  },
  infoSection: {
    flex: 1,
    justifyContent: 'space-evenly',
    marginLeft: 15,
  },
  ratingDiv: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    borderRadius: 7,
  },
  rating: {
    color: 'white',
  },
  commentDiv: {
    marginTop: 15,
  },
  comment: {
    color: '#464646',
  },
  userName: {
    color: '#8d8d8d',
    marginTop: 10,
  },
});

export default styles;
