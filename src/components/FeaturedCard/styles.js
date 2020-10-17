import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import distances from '../../constants/distances';

export default StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: colors.white,
    borderColor: colors.gray,
    height: 240,
    margin: distances.halfDistance
  },
  imageContainer: {
    flex: 1
  },
  infoContainer: {
    height: 80,
    backgroundColor: 'rgba(52, 52, 52, 0.5)'
  },
  titleContainer: {
    flex: 2,
    marginLeft: distances.halfDistance,
  },
  overviewContainer: {
    flex: 6,
    marginLeft: distances.halfDistance,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end"
  },
  title: {
    fontSize: fonts.bigger,
    color: colors.pink,
    flex: 2,
    fontWeight: "bold",
  },
  overview: {
    fontSize: fonts.normal,
    color: colors.white,
    flex: 1
  },
});
