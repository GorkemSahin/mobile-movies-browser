import React from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../constants/colors';

export default ({ onPress, style }) => {
  return (
    <TouchableOpacity style={{ ...styles.container, ...style }} onPress={ onPress }>
      <Icon name="search" size={ 24 } color={ colors.pink } />
    </TouchableOpacity>
  );
};
