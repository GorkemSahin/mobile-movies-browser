import React, { useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { featuredMovieSelector, moviesSelector, threeDocumentaryMoviesSelector, threeFamilyMoviesSelector, threePopularMoviesSelector } from '../../appState/movie/selectors';
import { fetchPopularMoviesAction, fetchMoviesByGenreAction } from '../../appState/movie/actions';
import { fetchTvsAction } from '../../appState/tv/actions';
import { fetchGenresAction } from '../../appState/genre/actions';
import { threePopularTvsSelector } from '../../appState/tv/selectors';
import Category from '../../components/Category';
import FeaturedCard from '../../components/FeaturedCard';

const category = { name: "Name", description: "Description" }

export default ({navigation}) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularMoviesAction());
    dispatch(fetchGenresAction());
    dispatch(fetchTvsAction());
    dispatch(fetchMoviesByGenreAction("10751|99"));
  }, []);

  const featuredMovie = useSelector(featuredMovieSelector);
  const popularMovies = useSelector(threePopularMoviesSelector);
  const popularTvs = useSelector(threePopularTvsSelector);
  const familyMovies = useSelector(threeFamilyMoviesSelector);
  const documentaryMovies = useSelector(threeDocumentaryMoviesSelector);
  const allMovies = useSelector(moviesSelector);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        { featuredMovie ? <FeaturedCard movie={featuredMovie} containerStyle={{ flex: 1 }}></FeaturedCard> : <></> }
        <Category category={{ name: "Popular Movies", description: "Description" }} movies={popularMovies} containerStyle={{ flex: 1 }}></Category>
        <Category category={{ name: "Popular TV Shows", description: "Description" }} movies={popularTvs} containerStyle={{ flex: 1 }}></Category>
        <Category category={{ name: "Family Movies", description: "Description" }} movies={familyMovies} containerStyle={{ flex: 1 }}></Category>
        <Category category={{ name: "Documentaries", description: "Description" }} movies={documentaryMovies} containerStyle={{ flex: 1 }}></Category>
      </ScrollView>
    </View>
  );
};
