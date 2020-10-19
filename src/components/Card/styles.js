import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import distances from '../../constants/distances';

export default StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: colors.white,
    borderColor: colors.gray,
    borderWidth: 1,
    margin: distances.quarterDistance
  },
  imageContainer: {
    flex: 2
  },
  infoContainer: {
    flex: 1,
    padding: distances.quarterDistance
  },
  titleContainer: {
    flex: 2
  },
  dateContainer: {
    flex: 1
  },
  image: {
    flex: 1,
    resizeMode: "cover"
  },
  title: {
    fontSize: fonts.normal,
    color: colors.pink,
    flex: 2,
    fontWeight: "bold"
  },
  date: {
    fontSize: fonts.small,
    color: colors.black,
    flex: 1
  },
});
