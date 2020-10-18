import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Carousel from '../Carousel';
import Button from '../Button';
import { useNavigation } from '@react-navigation/core';

export default ({ category, movies }) => {
  const navigation = useNavigation();

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
          <Button title={"MORE"} onPress={ () => navigation.navigate("CategoryList", { name: category.name, movies }) }></Button>
        </View>
      </View>
      <Carousel movies={ movies }></Carousel>
    </View>
  );
};
