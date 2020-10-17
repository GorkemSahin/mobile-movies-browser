import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { FontAwesome } from '@expo/vector-icons';

export default ({ style }) => {
  return (
    <TouchableOpacity style={{ ...styles.style, style }}>
      <FontAwesome name="play" size={24} color="white" />
    </TouchableOpacity>
  );
};
