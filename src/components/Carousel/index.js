import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Card  from '../Card';

export default ({movies}) => {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      {movies ? (
        movies.map((movie) => (
          <Card movie={movie}></Card>
        ))
      ) : (
        <></>
      )}
    </View>
  );
};
