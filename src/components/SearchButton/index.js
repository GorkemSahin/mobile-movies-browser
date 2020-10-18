import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../constants/colors';

export default ({ style }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <Icon name="search" size={24} color={ colors.pink } />
    </View>
  );
};
