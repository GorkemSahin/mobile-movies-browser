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

  const onFail = () => alert('Please check your internet connection.');

  useEffect(() => {
    dispatch(fetchMediaAction(mediaType, genreId, onFail));
  }, []);

  const media = useSelector(mediaSelector)({ mediaType, genreId });

  return (
    <View style={ styles.container }>
      <View style={ styles.headerContainer }>
        <View style={ styles.infoContainer }>
          <View style={ styles.nameContainer }>
            <Text style={ styles.name }>
              { name }
            </Text>
          </View>
          <View style={ styles.descriptionContainer }>
            <Text style={ styles.description }>
              { description }
            </Text>
          </View>
        </View>
        <View style={ styles.buttonContainer }>
          <Button title={"MORE"} onPress={ () => navigation.navigate("ListMedia", { name, media }) }></Button>
        </View>
      </View>
      <Carousel media={ media }></Carousel>
    </View>
  );
};
