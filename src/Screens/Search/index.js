import React, { useEffect, useState } from 'react';
import { View, FlatList, TextInput } from 'react-native';
import styles from './styles';
import colors from '../../constants/colors';
import { searchMediaAction } from '../../appState/media/actions';
import Icon from 'react-native-vector-icons/FontAwesome';
import MediaListItem from '../../components/MediaListItem';
import { MOVIE } from '../../appState/media/constants';
import { useDispatch } from 'react-redux';


export default () => {

  const dispatch = useDispatch();

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const onFail = () => {
    setResults([]);
    alert("Something went wrong.")
  }

  useEffect(() => {
    if (query.length > 2 ){
      dispatch(searchMediaAction(MOVIE, query, setResults, onFail));
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
          renderItem={(result) => <MediaListItem media={ result.item }/>}/>
      </View>
    </View>
  );
};