import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import distances from '../../constants/distances';

export default StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: colors.white,
    borderColor: colors.gray,
    borderWidth: 1,
    padding: distances.doubleDistance,
  },
  titleContainer: {
    flex: 0,
    marginBottom: distances.defaultDistance
  },
  overviewContainer: {
    flex: 0
  },
  title: {
    fontSize: fonts.biggest,
    color: colors.pink,
    fontWeight: "bold"
  },
  overview: {
    fontSize: fonts.big,
    color: colors.black,
  },
});
