import React, { useEffect } from 'react';
import {Text, View, ImageBackground } from 'react-native';
import { IMAGE_URL } from '@env';
import styles from './styles';
import PlayButton from '../../components/PlayButton';
import DescriptionCard from '../../components/DescriptionCard';

export default ({ route }) => {
  const { movie } = route.params;

  return (
    <View style={ styles.container }>
      <ImageBackground style={ styles.image } imageStyle={{ resizeMode: "cover" }} source={{ uri: IMAGE_URL + movie.poster_path }}>
        <DescriptionCard movie={ movie }></DescriptionCard>
      </ImageBackground>
    </View>
  );
};
