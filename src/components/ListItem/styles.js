import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import distances from '../../constants/distances';

export default StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.white,
    borderColor: colors.gray,
    borderWidth: 1,
    margin: distances.quarterDistance
  },
  container: {
    flex: 1, 
    height: 140,
    flexDirection: "row"
  },
  imageContainer: {
    flex: 1
  },
  infoContainer: {
    flex: 4,
    padding: distances.halfDistance
  },
  titleContainer: {
    flex: 1
  },
  overviewContainer: {
    flex: 4
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
  overview: {
    fontSize: fonts.normal,
    color: colors.black,
    flex: 1
  },
});
