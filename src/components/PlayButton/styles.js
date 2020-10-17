import {StyleSheet} from 'react-native';
import distances from '../../constants/distances';
import colors from '../../constants/colors';

export default StyleSheet.create({
  style: {
    alignItems:'center',
    justifyContent:'center',
    width:70,
    position: 'absolute',
    right: 10,
    height: 70,
    backgroundColor: colors.pink,
    borderRadius: 100,
    position: 'absolute',
    right: distances.defaultDistance,
    top: -35,
  }
});
