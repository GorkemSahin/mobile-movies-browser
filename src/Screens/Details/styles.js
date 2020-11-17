import {Platform, StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import distances from '../../constants/distances';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    resizeMode: "cover"
  },
  descriptionContainer: {
    flex: 0,
    backgroundColor: colors.white,
    borderColor: colors.gray,
    borderWidth: 1,
    paddingHorizontal: distances.doubleDistance,
    paddingTop: distances.doubleDistance,
    paddingBottom: distances.defaultDistance
  },
  ratingContainer: {
    flex: 0,
    height: 20,
    marginBottom: distances.halfDistance,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start"
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
    color: colors.black
  },
  playButton: {
    width:70,
    position: 'absolute',
    right: 10,
    height: 70,
    backgroundColor: colors.pink,
    borderRadius: 100,
    position: 'absolute',
    right: distances.defaultDistance,
    top: -35,
    borderWidth: 3,
    borderColor: colors.white
  }
});
