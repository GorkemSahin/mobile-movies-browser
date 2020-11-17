import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import distances from '../../constants/distances';
import fonts from '../../constants/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: distances.halfDistance,
    borderColor: colors.black
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    marginTop: distances.halfDistance,
    marginHorizontal: distances.halfDistance
  },
  infoContainer: {
    flex: 2,
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  buttonStyle: {
    backgroundColor: colors.pink,
    padding: distances.halfDistance
  },
  titleStyle: {
    color: colors.white,
    fontSize: fonts.normal,
  },
  name: {
    fontSize: fonts.big,
    fontWeight: "bold",
    color: colors.pink
  }
});
