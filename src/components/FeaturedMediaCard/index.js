import React from 'react';
import { TouchableOpacity, View, ImageBackground, Text } from 'react-native';
import styles from './styles';
import { IMAGE_URL } from '@env'
import {useNavigation} from '@react-navigation/core';
import Rating from '../Rating';
import colors from '../../constants/colors';

export default ({ media }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={()=>{navigation.navigate("Details", { media })}}>
      <View style={ styles.cardContainer }>
        <ImageBackground style={ styles.image } source={{ uri: IMAGE_URL + media.poster_path }}>
          <View style={ styles.infoContainer }>
            <View style={ styles.titleContainer }>
              <Text style={ styles.title }>
                { media.title || media.name }
              </Text>
              <Rating style={ styles.rating } rating={ media.vote_average } textStyle={{ color: colors.pink, fontWeight: "bold" }}/>
            </View>
            <Text
              ellipsizeMode={ 'tail' } numberOfLines={ 4 } style={ styles.overview }>
              { media.overview }
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};
