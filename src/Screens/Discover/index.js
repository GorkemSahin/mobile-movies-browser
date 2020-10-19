import React, { useEffect } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { featuredMovieSelector, popularMoviesSelector, documentaryMoviesSelector, familyMoviesSelector } from '../../appState/movie/selectors';
import { fetchMoviesAction } from '../../appState/movie/actions';
import { fetchTvsAction } from '../../appState/tv/actions';
import { fetchGenresAction } from '../../appState/genre/actions';
import { threePopularTvsSelector } from '../../appState/tv/selectors';
import Category from '../../components/Category';
import FeaturedCard from '../../components/FeaturedCard';
import styles from './styles';

export default () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesAction());
    dispatch(fetchGenresAction());
    dispatch(fetchTvsAction());
    setTimeout(() => {
      dispatch(fetchMoviesAction("10751")); // Genre ID for family movies
      setTimeout(() => {
        dispatch(fetchMoviesAction("99")); // Genre ID for documentaries
      }, 1000);
    }, 500);
  }, []);

  const featuredMovie = useSelector(featuredMovieSelector);
  const popularMovies = useSelector(popularMoviesSelector);
  const popularTvs = useSelector(threePopularTvsSelector);
  const familyMovies = useSelector(familyMoviesSelector);
  const documentaryMovies = useSelector(documentaryMoviesSelector);

  return (
    <View style={ styles.container }>
      <ScrollView showsVerticalScrollIndicator={false}>
        { featuredMovie ? <FeaturedCard movie={featuredMovie} containerStyle={ styles.featuredContainer }></FeaturedCard> : <></> }
        <Category category={{ name: "Popular Movies", description: "Description" }} movies={popularMovies} containerStyle={ styles.categoryContainer }/>
        <Category category={{ name: "Popular TV Shows", description: "Description" }} movies={popularTvs} containerStyle={ styles.categoryContainer }/>
        <Category category={{ name: "Family Movies", description: "Description" }} movies={familyMovies} containerStyle={ styles.categoryContainer }/>
        <Category category={{ name: "Documentaries", description: "Description" }} movies={documentaryMovies} containerStyle={ styles.categoryContainer }/>
      </ScrollView>
    </View>
  );
};
