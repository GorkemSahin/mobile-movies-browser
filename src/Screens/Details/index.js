import React, { useEffect } from 'react';
import {Text, View, Image } from 'react-native';
import { IMAGE_URL } from '@env';
import styles from './styles';
import DescriptionCard from '../../components/DescriptionCard';

export default ({ route }) => {
  const { movie } = route.params;

  return (
    <View style={ styles.container }>
      <Image style={ styles.image } source={{ uri: IMAGE_URL + movie.poster_path }}/>
      <DescriptionCard movie={ movie }></DescriptionCard>
    </View>
  );
};
