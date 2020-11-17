import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import styles from './styles';
import { THUMBNAIL_URL } from '@env'
import {useNavigation} from '@react-navigation/core';
import Rating from '../Rating';

export default ({ media, style }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{ ...styles.container, ...style }}
      onPress={()=>{navigation.navigate("Details", { media })}}>
      <View style={ styles.cardContainer }>
        <View style={ styles.imageContainer }>
          <Image
            style={ styles.image }
            source={{ uri: THUMBNAIL_URL + media.poster_path }}
          />
        </View>
        <View style={ styles.infoContainer }>
          <View style={ styles.titleContainer }>
            <Text style={ styles.title }>
              { media.title || media.name }
            </Text>
            <Rating style={ styles.rating } rating={ media.vote_average } />
          </View>
          <View style={ styles.overviewContainer }>
            <Text ellipsizeMode={ 'tail' } numberOfLines={ 4 } style={ styles.overview }>
              { media.overview }
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
