import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default ({ style }) => {
  return (
    <TouchableOpacity style={{ ...styles.style, style }}>
      <Icon name="play" size={24} color="white" />
    </TouchableOpacity>
  );
};
