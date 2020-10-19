import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import styles from './styles';
import { THUMBNAIL_URL } from '@env'
import { useNavigation } from '@react-navigation/core';
import Rating from '../Rating';

export default ({ movie, style }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={{ flex: 1, ...style }} onPress={()=>{navigation.navigate("Details", {movie})}}>
      <View style={ styles.cardContainer }>
        <View style={ styles.imageContainer }>
          <Image
            style={ styles.image }
            source={{ uri: THUMBNAIL_URL + movie.poster_path }}
          />
        </View>
        <View style={ styles.infoContainer }>
          <View style={ styles.titleContainer }>
            <Text ellipsizeMode={ "tail" } numberOfLines={ 2 } style={ styles.title }>
              { movie.title || movie.name }
            </Text>
          </View>
          <View style={ styles.ratingContainer }>
            <Rating style={ styles.rating } rating={ movie.vote_average }/>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
