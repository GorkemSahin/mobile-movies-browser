import React from 'react';
import { View, Image, Text } from 'react-native';
import PlayButton from '../PlayButton';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default ({ movie }) => {
  const navigation = useNavigation();

  return (
    <View style={ styles.container }>
        <PlayButton style={{ }} onPress={ ()=>{ navigation.navigate("Player", { sample: true }) }}></PlayButton>
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
