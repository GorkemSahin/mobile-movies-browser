import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { IMAGE_URL } from '@env'

export default ({ movie }) => {
  return (
    <View style={{ flex: 1 }}>
      <Image source={{ uri: IMAGE_URL + movie.poster_path }} style={{ flex: 4 }}></Image>
      <Text style={{ flex: 1 }}>
        {movie.title}
      </Text>
      <Text style={{ flex: 3 }}>
        {movie.overview}
      </Text>
    </View>
  );
};
