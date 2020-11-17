import React, { useEffect, useState } from 'react';
import { View, FlatList, TextInput } from 'react-native';
import styles from './styles';
import colors from '../../constants/colors';
import api from '../../api';
import Icon from 'react-native-vector-icons/FontAwesome';
import MediaListItem from '../../components/MediaListItem';
import { MOVIE } from '../../appState/media/constants';

export default ({ route }) => {

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      if (query.length > 2 ){
        try {
          const { data: { results }} = await api.media.searchMedia(MOVIE, query);
          setResults(results);
        } catch {
          alert('Please check your internet connection.');
        }
      } else {
        setResults([]);
      }
    }
    fetchResults();
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
          renderItem={(result) => <MediaListItem media={ result.item }/>}/>
      </View>
    </View>
  );
};