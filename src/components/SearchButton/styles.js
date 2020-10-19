import {Platform, StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import distances from '../../constants/distances';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? distances.halfDistance : distances.defaultDistance,
    marginRight: distances.defaultDistance
  },
});
