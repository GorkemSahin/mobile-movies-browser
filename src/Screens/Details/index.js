import React from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import { IMAGE_URL } from '@env';
import styles from './styles';
import PlayButton from '../../components/PlayButton';
import Rating from '../../components/Rating';

export default ({ route, navigation }) => {
  const { media } = route.params;

  return (
    <ScrollView
      style={ styles.container }
      showsVerticalScrollIndicator={ false }
      bounces="never">
      <Image style={ styles.image } source={{ uri: IMAGE_URL + media.poster_path }}/>
      <View style={ styles.descriptionContainer }>
        <PlayButton style={ styles.playButton } onPress={ ()=>{ navigation.navigate("Player", { sample: true }) }}></PlayButton>
        <View style={ styles.ratingContainer }>
          <Rating style={ styles.rating } textStyle={{ fontWeight: "bold" }} rating={ media.vote_average }/>
        </View>
        <Text  containerStyle={ styles.overviewContainer } style={ styles.overview }>
          { media.overview }
        </Text>
      </View>
    </ScrollView>
  );
};
