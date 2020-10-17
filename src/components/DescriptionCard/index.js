import React from 'react';
import { View, Image, Text } from 'react-native';
import PlayButton from '../PlayButton';
import styles from './styles';

export default ({ movie }) => {
  return (
    <View style={ styles.container }>
        <PlayButton style={{ }}></PlayButton>
        <View style={ styles.titleContainer }>
          <Text style={ styles.title }>
            { movie.title || movie.name }
          </Text>
        </View>
        <View style={ styles.overviewContainer }>
          <Text style={ styles.overview }>
            { movie.overview }
          </Text>
        </View>
    </View>
  );
};
