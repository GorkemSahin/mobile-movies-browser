import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import MediaListItem from '../../components/MediaListItem';

export default ({ route }) => {
  
  const { params: { media }} = route;

  return (
    <View style={ styles.container }>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        data={ media }
        keyExtractor = { (item, index) => item.id.toString() }
        renderItem={ (media) => <MediaListItem media={ media.item }/>}/>
    </View>
  );
};