import React from 'react';
import { View, FlatList } from 'react-native';
import Card  from '../Card';
import styles from './styles';

export default ({movies}) => {
  return (
    <View style={ styles.carouselContainer }>
      <FlatList
        style={{ flex: 1 }}
        horizontal
        data={ movies }
        showsHorizontalScrollIndicator={false}
        renderItem={(movie) => <Card movie={ movie.item } style={{ width: 120 }}/> }/>
    </View>
  );
};
