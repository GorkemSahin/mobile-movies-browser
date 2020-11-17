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
  infoContainer: {
    flex: 1,
    padding: distances.quarterDistance
  },
  image: {
    flex: 2,
    resizeMode: "cover"
  },
  title: {
    fontSize: fonts.normal,
    color: colors.pink,
    flex: 2,
    fontWeight: "bold"
  },
  rating: {
    justifyContent: "flex-end",
    flexDirection: "row",
    flex: 1
  }
});
