import React, { useEffect, useState, useMemo } from 'react';
import { View, FlatList, TextInput } from 'react-native';
import styles from './styles';
import colors from '../../constants/colors';
import api from '../../api';
import Icon from 'react-native-vector-icons/FontAwesome';
import MovieListItem from '../../components/MovieListItem';

/* I thought about adding pagination to lists to display more than 20 items per category
as the user scrolled through the lists and carousels, but this was not asked in the assignment
paper so I skipped it. */

export default ({ route }) => {

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  useEffect(() =>{
    if (query.length > 0 ){
      api.movie.searchMovies(query).then((resp) => setResults(resp.data.results));
    } else {
      setResults([]);
    }
  },[query]);

  return (
    <View style={ styles.container }>
      <View style={ styles.searchContainer }>
        <View style={ styles.iconContainer }>
          <Icon name="search" size={24} color={ colors.pink } />
        </View>
        <TextInput
          style={ styles.text }
          autoFocus
          value={ query }
          onChangeText={ setQuery }
          placeholder={ "Type here" }></TextInput>
      </View>
      <View style={ styles.listContainer }>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
          data={ results }
          keyExtractor = { (item, index) => index.toString() }
          renderItem={(result) => <MovieListItem movie={ result.item }/>}/>
      </View>
    </View>
  );
};