import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import distances from '../../constants/distances';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: distances.defaultDistance
  },
  iconContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: distances.halfDistance
  },
  listContainer: {
    flex: 15,
    marginTop: distances.defaultDistance
  },
  text: {
    flex: 6,
    fontSize: fonts.big,
    alignSelf: "center",
    height: 40
  }
});
