import React from 'react';
import { View } from 'react-native';
import Card  from '../Card';
import styles from './styles';


export default ({movies}) => {
  return (
    <View style={ styles.carouselContainer }>
      {movies ? (
        movies.map((movie) => (
          <Card movie={ movie }></Card>
        ))
      ) : (
        <></>
      )}
    </View>
  );
};
