import React, { useEffect } from 'react';
import {Text, View} from 'react-native';
import { movieSelector } from '../../appState/movie/selectors';
import { fetchMoviesAction } from '../../appState/movie/actions'
import {useSelector, useDispatch} from 'react-redux';

export default () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesAction());
  }, []);

  const movies = useSelector(movieSelector);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
        </View>
    );
};
