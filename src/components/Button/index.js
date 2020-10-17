import { Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import React from 'react';
import styles from './styles';

export default ({ style, titleStyle, ...rest }) => {
  return (
    <Button
      buttonStyle={StyleSheet.compose(styles.buttonStyle, style)}
      titleStyle={StyleSheet.compose(styles.titleStyle, titleStyle)}
      {...rest}
    />
  );
};
