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
    marginHorizontal: distances.defaultDistance,
    marginBottom: distances.defaultDistance
  },
  container: {
    flex: 1, 
    height: 140
  },
  infoContainer: {
    flex: 6,
    padding: distances.defaultDistance
  },
  titleContainer: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: distances.quarterDistance
  },
  overviewContainer: {
    flex: 4
  },
  image: {
    flex: 2,
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
  rating: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row"
  }
});
