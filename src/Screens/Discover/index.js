import React, { useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { featuredMovieSelector, popularMoviesSelector, documentaryMoviesSelector, familyMoviesSelector } from '../../appState/movie/selectors';
import { fetchMoviesAction } from '../../appState/movie/actions';
import { fetchTvsAction } from '../../appState/tv/actions';
import { fetchGenresAction } from '../../appState/genre/actions';
import { threePopularTvsSelector } from '../../appState/tv/selectors';
import Category from '../../components/Category';
import FeaturedCard from '../../components/FeaturedCard';
import colors from '../../constants/colors';

const category = { name: "Name", description: "Description" }

export default () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesAction());
    dispatch(fetchGenresAction());
    dispatch(fetchTvsAction());
    setTimeout(() => {
      dispatch(fetchMoviesAction("10751"));
    }, 500);
    setTimeout(() => {
      dispatch(fetchMoviesAction("99"));
    }, 1000);
  }, []);

  const featuredMovie = useSelector(featuredMovieSelector);
  const popularMovies = useSelector(popularMoviesSelector);
  const popularTvs = useSelector(threePopularTvsSelector);
  const familyMovies = useSelector(familyMoviesSelector);
  const documentaryMovies = useSelector(documentaryMoviesSelector);

  return (
    <View style={{ flex: 1, backgroundColor: colors.gray }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        { featuredMovie ? <FeaturedCard movie={featuredMovie} containerStyle={{ height: 300 }}></FeaturedCard> : <></> }
        <Category category={{ name: "Popular Movies", description: "Description" }} movies={popularMovies} containerStyle={{ flex: 1 }}></Category>
        <Category category={{ name: "Popular TV Shows", description: "Description" }} movies={popularTvs} containerStyle={{ flex: 1 }}></Category>
        <Category category={{ name: "Family Movies", description: "Description" }} movies={familyMovies} containerStyle={{ flex: 1 }}></Category>
        <Category category={{ name: "Documentaries", description: "Description" }} movies={documentaryMovies} containerStyle={{ flex: 1 }}></Category>
      </ScrollView>
    </View>
  );
};
