import React, { useEffect, useState, useMemo } from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import ListItem from '../../components/ListItem';

export default ({ route, navigation }) => {
  return (
    <View style={ styles.container }>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        data={ route.params.movies }
        keyExtractor = { (item, index) => index.toString() }
        renderItem={(movie) => <ListItem movie={ movie.item }/>}/>
    </View>
  );
};