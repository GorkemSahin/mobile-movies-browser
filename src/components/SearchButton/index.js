import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { FontAwesome } from '@expo/vector-icons';
import colors from '../../constants/colors';

export default ({ style }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <FontAwesome name="search" size={24} color={ colors.pink } />
    </View>
  );
};
