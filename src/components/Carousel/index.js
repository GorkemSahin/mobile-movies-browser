import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Card  from '../Card';

export default ({movies}) => {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      {movies ? (
        movies.slice(0,3).map((movie) => (
          <Card movie={movie}></Card>
        ))
      ) : (
        <></>
      )}
    </View>
  );
};
