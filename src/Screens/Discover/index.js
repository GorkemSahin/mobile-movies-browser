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

  /* I used hard coded values to fetch family and documentary movies in the discovery screen,
  which is bad practice. Under ideal circumstances on a PROD app, I'd expect the back-end to decide
  what category to display on the front-end at a given time but in this case I was given a specific
  task of displaying these two categories. I thought about adding these genre IDs as ENV variables
  through a config file, but that wouldn't be all that different from using hard-coded values either,
  so I decided to go ahead with hard-coded values. */

  useEffect(() => {
    dispatch(fetchMoviesAction());
    dispatch(fetchGenresAction());
    dispatch(fetchTvsAction());
    setTimeout(() => {
      dispatch(fetchMoviesAction("10751")); // Genre ID for family movies
      setTimeout(() => {
        dispatch(fetchMoviesAction("99")); // Genre ID for documentaries
      }, 600);
    }, 600);
  }, []);

  /* Since I implemented only one array for keeping movies in AppState/Store, I put delay times
  between the dispatching of actions to fetch different categories of movies one after another
  to make sure that two actions would not be manipulating the same array in the AppState at the
  same time. Again, under ideal circumstances, I'd not have to do this. */

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
