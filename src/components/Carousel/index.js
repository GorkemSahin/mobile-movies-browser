import React from 'react';
import { View, FlatList } from 'react-native';
import MediaCard  from '../MediaCard';
import styles from './styles';

export default ({ media }) => {
  return (
    <View style={ styles.carouselContainer }>
      <FlatList
        style={{ flex: 1 }}
        horizontal
        data={ media }
        showsHorizontalScrollIndicator={false}
        keyExtractor = { (mediaItem, index) => mediaItem.id.toString() }
        renderItem={ (mediaItem) => <MediaCard media={ mediaItem.item } style={{ width: 120 }}/> }/>
    </View>
  );
};
