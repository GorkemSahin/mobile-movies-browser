import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../constants/colors';

export default ({ rating, style, textStyle }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <View style={ styles.starContainer }>
        <Icon name="star" size={ 12 } color={ colors.pink } iconStyle={{ color: colors.pink }}/>
      </View>
      <View style={ styles.ratingContainer }>
        <Text style={{ ...textStyle }}>
          { rating + "/10" }
        </Text>
      </View>
    </View>
  );
};
