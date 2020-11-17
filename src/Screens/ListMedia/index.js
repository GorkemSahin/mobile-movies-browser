import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import MediaListItem from '../../components/MediaListItem';

export default ({ route }) => {
  
  const { params: { media }} = route;

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={ styles.container }
      data={ media }
      keyExtractor = { (item, index) => item.id.toString() }
      renderItem={ (media) => <MediaListItem media={ media.item }/>}/>
  );
};