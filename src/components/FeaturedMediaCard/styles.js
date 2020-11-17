import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import distances from '../../constants/distances';

export default StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: colors.white,
    borderColor: colors.gray,
    height: 280,
    margin: distances.halfDistance
  },
  imageContainer: {
    flex: 1
  },
  infoContainer: {
    height: 120,
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    padding: distances.halfDistance
  },
  titleContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: distances.quarterDistance
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
    flex: 0
  },
  rating: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row"
  }
});
