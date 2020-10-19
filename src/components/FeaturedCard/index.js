import React from 'react';
import { TouchableOpacity, View, ImageBackground, Text } from 'react-native';
import styles from './styles';
import { IMAGE_URL } from '@env'
import {useNavigation} from '@react-navigation/core';
import Rating from '../Rating';
import colors from '../../constants/colors';

export default ({ movie }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={()=>{navigation.navigate("Details", {movie})}}>
      <View style={ styles.cardContainer }>
        <ImageBackground style={ styles.image } source={{ uri: IMAGE_URL + movie.poster_path }}>
          <View style={ styles.infoContainer }>
            <View style={ styles.titleContainer }>
              <Text style={ styles.title }>
                { movie.title || movie.name }
              </Text>
              <Rating style={ styles.rating } rating={ movie.vote_average } textStyle={{ color: colors.pink, fontWeight: "bold" }}/>
            </View>
            <View style={ styles.overviewContainer }>
              <Text ellipsizeMode={ 'tail' } numberOfLines={ 4 } style={ styles.overview }>
                { movie.overview }
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};
