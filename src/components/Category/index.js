import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Carousel from '../Carousel';
import Button from '../Button';

export default ({ category, movies }) => {
  return (
    <View style={ styles.categoryContainer }>
      <View style={ styles.headerContainer }>
        <View style={ styles.infoContainer }>
          <View style={ styles.nameContainer }>
            <Text style={ styles.name }>
              {category.name}
            </Text>
          </View>
          <View style={ styles.descriptionContainer }>
            <Text style={ styles.description }>
              {"Description"}
            </Text>
          </View>
        </View>
        <View style={ styles.buttonContainer }>
          <Button title={"MORE"}></Button>
        </View>
      </View>
      <Carousel movies={ movies }></Carousel>
    </View>
  );
};
