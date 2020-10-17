import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import distances from '../../constants/distances';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 2
  },
  infoContainer: {
    flex: 1,
    margin: distances.quarterDistance,
    padding: distances.halfDistance,
    backgroundColor: colors.white
  },
  titleContainer: {
    flex: 1
  },
  overviewContainer: {
    flex: 3
  },
  image: {
    flex: 1,
    resizeMode: "stretch",
    justifyContent: "flex-end"
  },
  title: {
    fontSize: fonts.biggest,
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
