import React, { useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { featuredMovieSelector } from '../../appState/movie/selectors';
import { fetchMoviesAction } from '../../appState/movie/actions';
import { fetchGenresAction } from '../../appState/genre/actions';
import FeaturedCarousel from '../../containers/FeaturedCarousel';
import FeaturedCard from '../../components/FeaturedCard';
import styles from './styles';

// You can configure which categories to display by changing this file.
import discoverConstants from '../../utils/discoverConstants';

export default () => {

  const dispatch = useDispatch();

  const onFail = () => alert('Please check your internet connection.');

  useEffect(() => {
    dispatch(fetchGenresAction(onFail));
    dispatch(fetchMoviesAction(onFail));
  }, []);

  const featuredMovie = useSelector(featuredMovieSelector);

  return (
    <View style={ styles.container }>
      <ScrollView showsVerticalScrollIndicator={false}>
        { featuredMovie ? <FeaturedCard movie={featuredMovie} containerStyle={ styles.featuredContainer }></FeaturedCard> : <></> }
        {
          discoverConstants.map((genreId) =>
            <FeaturedCarousel key={ genreId } genreId={genreId} containerStyle={ styles.categoryContainer }/>)
        }
      </ScrollView>
    </View>
  );
};
