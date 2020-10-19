import React from 'react';
import { View, Image, Text } from 'react-native';
import PlayButton from '../PlayButton';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Rating from '../Rating';

export default ({ movie }) => {
  const navigation = useNavigation();

  return (
    <View style={ styles.container }>
        <PlayButton style={ styles.playButton } onPress={ ()=>{ navigation.navigate("Player", { sample: true }) }}></PlayButton>
        <View style={ styles.ratingContainer }>
          <Rating style={ styles.rating } textStyle={{ fontWeight: "bold" }} rating={ movie.vote_average }/>
        </View>
        <View style={ styles.overviewContainer }>
          <Text style={ styles.overview }>
            { movie.overview }
          </Text>
        </View>
    </View>
  );
};
