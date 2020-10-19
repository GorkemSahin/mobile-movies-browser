import {StyleSheet} from 'react-native';
import distances from '../../constants/distances';
import colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 0,
    alignItems: "center",
    flexDirection: "row"
  },
  starContainer: {
    flex: 0,
    marginRight: distances.quarterDistance
  },
  ratingContainer: {
    flex: 0
  }
});
