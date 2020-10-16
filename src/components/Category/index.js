import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import Carousel from '../Carousel';

export default ({ category, movies }) => {
  return (
    <View style={{ margin: 8 }}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <Text style={{ flex: 1, fontWeight: 'bold' }}>
            {category.name}
          </Text>
          <Text style={{ flex: 1 }}>
            {"Description"}
          </Text>
        </View>
        <Button title={"MORE"} style={{ flex: 1 }}></Button>
      </View>
      <Carousel movies={movies} containerStyle={{ flex: 2 }}></Carousel>
    </View>
  );
};
