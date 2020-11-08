import React, { useEffect, useState, useMemo } from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import MovieListItem from '../../components/MovieListItem';

export default ({ route }) => {
  return (
    <View style={ styles.container }>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        data={ route.params.movies }
        keyExtractor = { (item, index) => index.toString() }
        renderItem={(movie) => <MovieListItem movie={ movie.item }/>}/>
    </View>
  );
};