import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { IMAGE_URL } from '@env'
import { Card } from 'react-native-elements'

export default ({ movie }) => {
  return (
    <Card containerStyle={{ flex: 1, margin: 8, padding: 0 }} >
      <Card.Image source={{ uri: IMAGE_URL + movie.poster_path }}></Card.Image>
      <Card.Title >
        {movie.title}
      </Card.Title>
      <Text>
        {movie.overview}
      </Text>
    </Card>
  );
};
