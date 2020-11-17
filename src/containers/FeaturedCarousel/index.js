import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Carousel from '../../components/Carousel';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/core';
import { useSelector, useDispatch } from 'react-redux';
import { mediaSelector } from '../../appState/media/selectors';
import { fetchMediaAction } from '../../appState/media/actions';

export default ({ category }) => {
  const { name, mediaType, genreId, description } = category;

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onFail = () => alert('Something went wrong.');

  useEffect(() => {
    dispatch(fetchMediaAction(mediaType, genreId, onFail));
  }, []);

  const media = useSelector(mediaSelector)(mediaType, genreId);

  return (
    <View style={ styles.container }>
      <View style={ styles.headerContainer }>
        <View style={ styles.infoContainer }>
          <Text style={ styles.name }>
            { name }
          </Text>
          <Text style={ styles.description }>
            { description }
          </Text>
        </View>
        <Button
          containerStyle={ styles.buttonContainer }
          title={"MORE"}
          onPress={ () => navigation.navigate("ListMedia", { name, media }) }/>
      </View>
      <Carousel media={ media }></Carousel>
    </View>
  );
};
