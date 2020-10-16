import React, { useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { moviesSelector } from '../../appState/movie/selectors';
import { fetchMoviesAction } from '../../appState/movie/actions'
import { useSelector, useDispatch } from 'react-redux';
import Carousel from '../../components/Carousel';

export default ({navigation}) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesAction());
  }, []);

  const movies = useSelector(moviesSelector);

  return (
    <View style={{ flex: 1 }}>
      <Carousel movies={movies}></Carousel>
    </View>
  );
};
