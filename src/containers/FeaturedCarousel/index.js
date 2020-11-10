import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Carousel from '../../components/Carousel';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/core';
import { useSelector, useDispatch } from 'react-redux';
import { popularMoviesSelector, moviesSelectorByGenre } from '../../appState/movie/selectors';
import { tvsSelector } from '../../appState/tv/selectors';
import { fetchMoviesAction } from '../../appState/movie/actions';
import { fetchTvsAction } from '../../appState/tv/actions';
import { genreSelector } from '../../appState/genre/selectors';

export default ({ genreId }) => {

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const isTv = genreId === "tv";

  const onFail = () => alert('Please check your internet connection.');

  useEffect(() => {
    dispatch(isTv ? fetchTvsAction(onFail) : fetchMoviesAction(onFail, genreId));
  }, []);

  const movies = useSelector(isTv ? tvsSelector :
    (genreId ? moviesSelectorByGenre(genreId) : popularMoviesSelector));

  const genre = useSelector(genreSelector(genreId));
  const name = isTv ? "TV Shows" : genre ? genre.name : "Popular Movies";

  return (
    <View style={ styles.categoryContainer }>
      <View style={ styles.headerContainer }>
        <View style={ styles.infoContainer }>
          <View style={ styles.nameContainer }>
            <Text style={ styles.name }>
              { name }
            </Text>
          </View>
          <View style={ styles.descriptionContainer }>
            <Text style={ styles.description }>
              {"Description"}
            </Text>
          </View>
        </View>
        <View style={ styles.buttonContainer }>
          <Button title={"MORE"} onPress={ () => navigation.navigate("ListMovies", { name: name, movies }) }></Button>
        </View>
      </View>
      <Carousel movies={ movies }></Carousel>
    </View>
  );
};
